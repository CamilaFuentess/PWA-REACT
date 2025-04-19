import {useState} from 'react';
import ContenedorPelis from '../../Components/ContenedorPelis/ContenedorPelis'; 
import BarraDeInicio from '../../Components/BarraDeInicio/BarraDeInicio';
import InputBusqueda from '../../Components/InputBusqueda/InputBusqueda';
import Mati from './Mati.jsx'
import Ordenamiento from '../../Components/Ordenamiento/Ordenamiento'; 
import style from './Home.module.css'; 

const peli1 = {
  tipo: "Serie", 
  titulo: "Flash",
  director: "Andy Muschietti", 
  anio: 2014, 
  genero: "Accion",
  rating: 92, 
  imagen: "https://es.web.img2.acsta.net/pictures/17/09/29/21/15/4233147.jpg",
  visto: false
};

const peli2 = {
  tipo: "Pelicula", 
  titulo: "La Cenicienta",
  director: "Kenneth Branagh", 
  anio: 2015, 
  genero: "Fantasia",
  rating: 78, 
  imagen: "https://es.web.img2.acsta.net/pictures/14/11/19/16/01/398307.jpg",
  visto: true
};

const peli3 = {
  tipo: "Serie", 
  titulo: "Bridgerton",
  director: "Chris Van Dusen", 
  anio: 2020, 
  genero: "Drama",
  rating: 85, 
  imagen: "https://es.web.img3.acsta.net/c_310_420/pictures/20/11/04/12/03/4756219.jpg?coixp=50&coiyp=32",
  visto: true
}; 

const pelis = [peli1, peli2, peli3]
// Guardar datos en Local Storage
const guardar = ({pelis}) =>{
  localStorage.setItem('peliculasYSeries', JSON.stringify(pelis));
}

// Recuperar datos de Local Storage
const cargar = () =>{
  const peYse = JSON.parse(localStorage.getItem('peliculasYSeries'));
  return peYse
}

const Home = () => {
  const [filtro, setFiltro] = useState({ tipo: '', valor: '' });
  const [peliculasYSeries, setPeliculasYSeries] = useState(pelis); 
  const manejarFiltro = (tipo, valor) => {
    setFiltro({ tipo, valor });
  };
  const [orden, setOrden] = useState('');
  const manejarOrden = (valor) => {
    setOrden(valor);
  };
  return (
    <div >
    <header>
      <BarraDeInicio manejarFiltro={manejarFiltro} />
    </header>
    <div className={style.contenedorPrincipal}> 
      <div className={style.contenedorPelis}> 
        <ContenedorPelis filtro={filtro} peliculasYSeries={peliculasYSeries} orden={orden}/>
      </div>
      <div className={style.ordenamiento}> 
        <Ordenamiento manejarOrden={manejarOrden} />
      </div>
         {/**<div> <Mati arregloPelis={cargar()} /> <button onClick={() => guardar({pelis})}>Guardar</button><button onClick={() => cargar()}>Cargar</button></div>*/}
    </div>
  </div>  
   

  );
};

export default Home;
