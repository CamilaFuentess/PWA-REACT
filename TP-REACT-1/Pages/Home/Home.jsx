import {useState} from 'react';
import ContenedorPelis from '../../Components/ContenedorPelis/ContenedorPelis'; // Asegúrate de importar tu componente
import BarraDeInicio from '../../Components/BarraDeInicio/BarraDeInicio';
import InputBusqueda from '../../Components/InputBusqueda/InputBusqueda';

const Home = () => {
  const [filtro, setFiltro] = useState({ tipo: '', valor: '' });

  const manejarFiltro = (tipo, valor) => {
    setFiltro({ tipo, valor });
  };

  return (
    <div >
      <BarraDeInicio manejarFiltro={manejarFiltro} />
      <InputBusqueda manejarFiltro={manejarFiltro}/>
      <ContenedorPelis filtro={filtro} />
    </div>
  );
};

export default Home;
