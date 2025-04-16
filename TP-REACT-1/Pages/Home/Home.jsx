<<<<<<< Updated upstream
import style from './Home.module.css'
import BarraDeInicio from '../../Components/BarraDeInicio/BarraDeInicio.jsx'
import BotonEliminarModificar from '../../Components/Botones/EliminarModificar/EliminarModificar.jsx'
import BotonInicio from '../../Components/Botones/Inicio/Inicio.jsx'
import Mati from './Mati.jsx'
=======
import {useState} from 'react';
import ContenedorPelis from '../../Components/ContenedorPelis/ContenedorPelis'; // Asegúrate de importar tu componente
import BarraDeInicio from '../../Components/BarraDeInicio/BarraDeInicio';
import InputBusqueda from '../../Components/InputBusqueda/InputBusqueda';
>>>>>>> Stashed changes

const Home = () => {
  const [filtro, setFiltro] = useState({ tipo: '', valor: '' });

<<<<<<< Updated upstream
    return (
        <>
            <BarraDeInicio/>
            <BotonInicio/>
            <BotonEliminarModificar/>
            <h1>Hola bb</h1>
            <div className={style.recuadro}><Mati/></div>
        </>
=======
  const manejarFiltro = (tipo, valor) => {
    setFiltro({ tipo, valor });
  };
>>>>>>> Stashed changes

  return (
    <div >
      <BarraDeInicio manejarFiltro={manejarFiltro} />
      <InputBusqueda manejarFiltro={manejarFiltro}/>
      <ContenedorPelis filtro={filtro} />
    </div>
  );
};

export default Home;
