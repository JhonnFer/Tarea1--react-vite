// src/components/SportsGallery.jsx
import futbol_americano from '../assets/imagenes_src/futbol_americano.jpg';
import futbol_sala from '../assets/imagenes_src/futbol_sala.jpeg';

const SportsGallery = () => {
  return (
    <div>
      <h2>Galería de Deportes Favoritos</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        {/* Imágenes desde public */}
        <div>
          <img src="/imagenes_public/basketball.webp" alt="Basketball" width="200" />
          <p>Basketball</p>
        </div>
        <div>
          <img src="/imagenes_public/ecuavoley.jpg" alt="Ecuavoley" width="200" />
          <p>Ecuavoley</p>
        </div>

        {/* Imágenes desde src */}
        <div>
          <img src={futbol_americano} alt="Fútbol Americano" width="200" />
          <p>Fútbol Americano</p>
        </div>
        <div>
          <img src={futbol_sala} alt="Fútbol Sala" width="200" />
          <p>Fútbol Sala</p>
        </div>
      </div>
    </div>
  );
};

export default SportsGallery;
