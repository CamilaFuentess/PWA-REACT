

import TarjetaResumen from '../../Components/TarjetaResumen/TarjetaResumen.jsx';

const peli1 = {
    tipo: "Serie", 
    titulo: "Flash",
    director: "Andy Muschietti", 
    anio: 2014, 
    genero: "Accion",
    rating: "92%", 
    imagen: "https://es.web.img2.acsta.net/pictures/17/09/29/21/15/4233147.jpg",
    visto: false
  };
  
  const peli2 = {
    tipo: "Pelicula", 
    titulo: "La Cenicienta",
    director: "Kenneth Branagh", 
    anio: 2015, 
    genero: "Fantasia",
    rating: "78%", 
    imagen: "https://es.web.img2.acsta.net/pictures/14/11/19/16/01/398307.jpg",
    visto: true
  };
  
  const peli3 = {
    tipo: "Serie", 
    titulo: "Bridgerton",
    director: "Chris Van Dusen", 
    anio: 2020, 
    genero: "Drama",
    rating: "85%", 
    imagen: "https://es.web.img3.acsta.net/c_310_420/pictures/20/11/04/12/03/4756219.jpg?coixp=50&coiyp=32",
    visto: true
  }; 
 
 /*
const pelis = [peli1, peli2, peli3]
// Guardar datos en Local Storage
  localStorage.setItem('peliculasYSeries', JSON.stringify(pelis));

// Recuperar datos de Local Storage
const peYse = JSON.parse(localStorage.getItem('peliculasYSeries'));
 */

//<div> <Mati arregloPelis={peYse} /> </div>

const Mati = ({arregloPelis}) => {

    console.log (arregloPelis)
    return (
        <>
            <h4>Componentes de Mati</h4>
            <TarjetaResumen arregloPelicula={arregloPelis[1]}/>
        </>

    ) 
}; 

export default Mati