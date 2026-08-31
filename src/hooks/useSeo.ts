import { useEffect } from 'react';
import { site } from '@data/site';

interface Seo {
  titulo: string;
  descripcion: string;
  noindex?: boolean;
}

/**
 * SEO por página en una SPA: título, descripción, canonical y robots.
 * Si más adelante hace falta SEO más fuerte, prerenderizar las 5 rutas
 * en el build (vite-plugin-prerender o similar) sin tocar los componentes.
 */
export function useSeo({ titulo, descripcion, noindex = false }: Seo) {
  useEffect(() => {
    const tituloCompleto = titulo.includes(site.nombre) ? titulo : `${titulo} | ${site.nombre}`;
    document.title = tituloCompleto;

    const set = (selector: string, crear: () => HTMLElement, valor: string, attr = 'content') => {
      let el = document.head.querySelector(selector) as HTMLElement | null;
      if (!el) {
        el = crear();
        document.head.appendChild(el);
      }
      el.setAttribute(attr, valor);
    };

    set('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    }, descripcion);

    set('meta[property="og:title"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:title');
      return m;
    }, tituloCompleto);

    set('meta[property="og:description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:description');
      return m;
    }, descripcion);

    const url = new URL(window.location.pathname, site.url).toString();
    set('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    }, url, 'href');

    set('meta[property="og:url"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:url');
      return m;
    }, url);

    set('meta[name="robots"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'robots');
      return m;
    }, noindex ? 'noindex, nofollow' : 'index, follow');
  }, [titulo, descripcion, noindex]);
}
