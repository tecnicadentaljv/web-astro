import { forwardRef } from 'react';
import {
  Link as RouterLink,
  NavLink as RouterNavLink,
  useNavigate,
  type LinkProps,
  type NavLinkProps,
} from 'react-router-dom';
import { navegarConTransicion } from '@/lib/viewTransition';

/**
 * Solo interceptamos el clic simple de botón izquierdo sin teclas
 * modificadoras: es la misma condición que usa React Router internamente
 * para decidir si el clic es "navegación normal" o si el usuario quería
 * abrir en pestaña nueva, copiar enlace, etc. Eso no se toca.
 */
function esClicSimple(e: React.MouseEvent) {
  return e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}

/**
 * Link y NavLink envueltos para cruzar de página con la View Transitions
 * API (ver src/lib/viewTransition.ts). Sustituyen a los de
 * 'react-router-dom' en toda la web; el resto de props se comporta igual.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, onClick, ...props },
  ref,
) {
  const navegar = useNavigate();
  return (
    <RouterLink
      ref={ref}
      to={to}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || !esClicSimple(e)) return;
        e.preventDefault();
        navegarConTransicion(() => navegar(to));
      }}
      {...props}
    />
  );
});

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { to, onClick, ...props },
  ref,
) {
  const navegar = useNavigate();
  return (
    <RouterNavLink
      ref={ref}
      to={to}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || !esClicSimple(e)) return;
        e.preventDefault();
        navegarConTransicion(() => navegar(to));
      }}
      {...props}
    />
  );
});
