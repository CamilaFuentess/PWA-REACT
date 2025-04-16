import {useState} from 'react';
import ContenedorPelis from '../../Components/ContenedorPelis/ContenedorPelis'; // Asegúrate de importar tu componente
import BarraDeInicio from '../../Components/BarraDeInicio/BarraDeInicio';
import InputBusqueda from '../../Components/InputBusqueda/InputBusqueda';

const Home = () => {
  const [filtro, setFiltro] = useState({ tipo: '', valor: '' });
  //FUNCION QUE BUSCA EN EL LOCALSTORAGE 
  //aca en home iria la funcion que crea/carga el arreglo desde el local
  const manejarFiltro = (tipo, valor) => {
    setFiltro({ tipo, valor });
  };

  return (
    <div >
      <header>
        <BarraDeInicio manejarFiltro={manejarFiltro} />
        <InputBusqueda manejarFiltro={manejarFiltro}/>
      </header>
      
      <ContenedorPelis filtro={filtro} />
    </div>
  );
};

export default Home;
