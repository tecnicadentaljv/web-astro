import { useSeo } from '@/hooks/useSeo';
import { seoRutas } from '@data/seo';
import { useReveal } from '@/hooks/useReveal';
import Hero from '@components/sections/Hero';
import Compromiso from '@components/sections/Compromiso';
import Problema from '@components/sections/Problema';
import Especialidades from '@components/sections/Especialidades';
import Flujo from '@components/sections/Flujo';
import Honestidad from '@components/sections/Honestidad';
import Garantia from '@components/sections/Garantia';
import PorQue from '@components/sections/PorQue';
import Faq from '@components/sections/Faq';
import CtaContacto from '@components/sections/CtaContacto';

/**
 * Diez secciones, diez familias de layout distintas.
 * Antes eran ocho secciones y dos familias, con cuatro rejillas de
 * tarjetas clonadas. Cero eyebrows en toda la página.
 *
 * Testimonios se ha retirado hasta tener valoraciones reales: publicar
 * tres cajas con "[Nombre del doctor/a]" restaba credibilidad.
 */
export default function Home() {
  useSeo(seoRutas['/']);
  useReveal();

  return (
    <>
      <Hero />
      <Compromiso />
      <Problema />
      <Especialidades soloDestacados conEnlace />
      <Flujo />
      <Honestidad />
      <Garantia />
      <PorQue />
      <Faq />
      <CtaContacto />
    </>
  );
}
