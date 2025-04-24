import {useState} from 'react';
import ContenedorPelis from '../../Components/ContenedorPelis/ContenedorPelis'; 
import BarraDeInicio from '../../Components/BarraDeInicio/BarraDeInicio';
import Ordenamiento from '../../Components/Ordenamiento/Ordenamiento'; 
import style from './Home.module.css'; 
import TarjetaModificar from '../../Components/TarjetaModificar/TarjetaModificar.jsx';
import Titulo from '../../Components/Titulo/Titulo.jsx';

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
  //Esto deberia estar dentro de un useEffect con dependencias vacias para mejor performance:
  //useEffect(() => {
//   if (cargar() == null) {
//     guardar(pelis);
//   }
// }, []);

  if (cargar()==null){
    //no envien los objetos dentro de objetos,  guardar(pelis) deberia ser suficiente
    guardar({pelis});
  }
  const [filtro, setFiltro] = useState({ tipo: '', valor: '' });
  const [peliculasYSeries, setPeliculasYSeries] = useState(cargar()); 
  const manejarFiltro = (tipo, valor) => {
    setFiltro({ tipo, valor });
  };
  const [orden, setOrden] = useState('');
  const manejarOrden = (valor) => {
    setOrden(valor);
  };
  const actualizarPeliculasYSeries = (nuevasPeliculas) => {
    setPeliculasYSeries(nuevasPeliculas);
    guardar({ pelis: nuevasPeliculas }); 
  };
  const [mostrarTarjetaModificar, setMostrarTarjetaModificar] = useState(false);
  const [modoAgregar, setModoAgregar] = useState(false);

  const abrirFormularioAgregar = () => {
    setModoAgregar(true);
    setMostrarTarjetaModificar(true);
  };
  return (
    <div className={style.recuadro}>
      <div className={style.header}> 
        <header className={style.header}>
          <Titulo texto ={'Cinema'} />
        <BarraDeInicio manejarFiltro={manejarFiltro} />
        </header>
      </div>
    
      <div className={style.contenedorPrincipal}> 
        <div className={style.contenedorPelis}> 
          <ContenedorPelis filtro={filtro} peliculasYSeries={peliculasYSeries} orden={orden} setPeliculasYSeries={actualizarPeliculasYSeries}/>
        </div>
        <div className={style.ordenamiento}> 
          <div className={style.agregar}>
            <button onClick={abrirFormularioAgregar}>Agregar pelicula/serie </button>
          </div>
          <Ordenamiento manejarOrden={manejarOrden} />
        </div>
      </div>
      {mostrarTarjetaModificar && (
        <TarjetaModificar
          flagAgregar={modoAgregar}
          cerrarTM={() => setMostrarTarjetaModificar(false)}
          peliculasYSeries={peliculasYSeries}
          actualizarPeliculasYSeries={actualizarPeliculasYSeries}
        />
      )}
    </div>  
   

  );
};

export default Home;
