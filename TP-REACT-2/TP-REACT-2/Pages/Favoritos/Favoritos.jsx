
import ContenedorProductos from "../../Components/ContenedorProductos/ContenedorProductos";
import Titulo from "../../Components/Titulo/Titulo";
import { useEffect, useState } from 'react';
import Animacion from "../../Components/Animacion/Animacion";
import { useTranslation } from "react-i18next";
const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);
  const { t } = useTranslation();
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
      <Titulo texto={t("favorites")} /> 
      {favoritos.length > 0 ? (
        <ContenedorProductos productos={favoritos} />
      ) : (
       <Animacion texto={t("noFavorites")} src="https://lottie.host/e77a65c3-25d1-423b-9dd6-e6774ff153c3/zGThR5teVM.json" />
      )}
    </div>
  );
};

export default Favoritos;