
import ContenedorProductos from "../../Components/ContenedorProductos/ContenedorProductos";
import Titulo from "../../Components/Titulo/Titulo";
import { useEffect, useState } from 'react';

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const cargarFavoritos = () => {
      const favs = JSON.parse(localStorage.getItem('favoritos')) || [];
      setFavoritos(favs);
    };
    cargarFavoritos(); 
    window.addEventListener("favoritosActualizados", cargarFavoritos);

    return () => {
      window.removeEventListener("favoritosActualizados", cargarFavoritos);
    };
  }, []);

  return (
    <div>
      <Titulo texto={"Favoritos"} /> 
      {favoritos.length > 0 ? (
        <ContenedorProductos productos={favoritos} />
      ) : (
        <p>No tenés favoritos todavía.</p>
      )}
    </div>
  );
};

export default Favoritos;