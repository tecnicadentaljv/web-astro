import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@components/layout/Layout';
import Home from '@pages/Home';
import QuienesSomos from '@pages/QuienesSomos';
import QueHacemos from '@pages/QueHacemos';
import Tecnologia from '@pages/Tecnologia';
import Contacto from '@pages/Contacto';
import Blog from '@pages/Blog';
import Legal from '@pages/Legal';
import NoEncontrada from '@pages/NoEncontrada';

/**
 * Al cambiar de página volvemos arriba, salvo que la URL traiga un ancla:
 * el bento de especialidades enlaza a /que-hacemos#protesis-fija y similares,
 * y ahí hay que ir al bloque, no al principio.
 */
function ScrollArriba() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const destino = document.querySelector(hash);
      if (destino) {
        destino.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollArriba />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/que-hacemos" element={<QueHacemos />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/aviso-legal" element={<Legal tipo="aviso" />} />
          <Route path="/privacidad" element={<Legal tipo="privacidad" />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </Layout>
    </>
  );
}
