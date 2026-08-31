import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import './styles/global.css';

export { seoRutas, rutasPublicas } from './data/seo';
export { faq } from './data/faq';

/**
 * Punto de entrada de servidor, usado SOLO en tiempo de build por
 * scripts/prerender.mjs. No llega al bundle del navegador.
 */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}
