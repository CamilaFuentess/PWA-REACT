import React from 'react';
import style from './ContenedorPelis.module.css';

const peliculasYSeries = [
    { 
        tipo: "Serie", 
        titulo: "Flash",
        director: "Andy Muschietti", 
        anio: 2014, 
        genero: "Accion",
        rating: "92%", 
        imagen: "/Imagenes/flashserie.jpg",
        visto: false
    }, 
    { 
        tipo: "Pelicula", 
        titulo: "La Cenicienta",
        director: "Kenneth Branagh", 
        anio: 2015, 
        genero: "Fantasia",
        rating: "78%", 
        imagen: "/Imagenes/lacenicienta.jpg",
        visto: true
      },
      { 
        tipo: "Serie", 
        titulo: "Bridgerton",
        director: "Chris Van Dusen", 
        anio: 2020, 
        genero: "Drama",
        rating: "85%", 
        imagen: "/Imagenes/bridgerton.jpg",
        visto: true
      },
      { 
        tipo: "Serie", 
        titulo: "Dr. House",
        director: "David Shore", 
        anio: 2004, 
        genero: "Drama",
        rating: "90%", 
        imagen: "/Imagenes/drhouse.jpg",
        visto: true
      },
      { 
        tipo: "Pelicula", 
        titulo: "El Padrino",
        director: "Francis Ford Coppola", 
        anio: 1972, 
        genero: "Crimen",
        rating: "98%", 
        imagen: "/Imagenes/elpadrino.jpg",
        visto: false
      },
      { 
        tipo: "Pelicula", 
        titulo: "Matrix",
        director: "The Wachowskis", 
        anio: 1999, 
        genero: "Ciencia ficcion",
        rating: "88%", 
        imagen: "/Imagenes/matrix.jpg",
        visto: true
      }
]; 

function ContenedorPelis ({filtro}) {
   
  const filtrar = () => {
    let resultado = peliculasYSeries; 
    switch(filtro.tipo) {
      case 'titulo': 
        resultado = peliculasYSeries.filter(p => p.titulo.toLowerCase().includes(filtro.valor.toLowerCase())); 
        break; 
      case 'director': 
        resultado = peliculasYSeries.filter(p => p.director.toLowerCase().includes(filtro.valor.toLowerCase())); 
        break; 
      case 'genero': 
        resultado = peliculasYSeries.filter(p => p.genero.toLowerCase().includes(filtro.valor.toLowerCase())); 
        break; 
      case 'tipo': 
        resultado = peliculasYSeries.filter(p => p.tipo.toLowerCase().includes(filtro.valor.toLowerCase())); 
        break; 
    }
    return resultado; 
  }; 

  const renderTarjetas = (pelis) =>
    pelis.map((contenedor, numero) => (
      <div key={numero} className={style.cartaContenido}>
        <div className={`${style.estado} ${contenedor.visto ? style.visto : style['no-visto']}`}>
          {contenedor.visto ? 'Visto' : 'No visto'}
        </div>
        <img src={contenedor.imagen} alt={contenedor.titulo} className={style.contenidoImagen} />
        <div className={style.informacion}>
          <strong>{contenedor.titulo}</strong> ({contenedor.anio})<br />
          <span className={style.tipo}>{contenedor.tipo}</span>
        </div>
      </div>
    ));


  const resultados = filtrar(); 
  if (filtro && (filtro.tipo == 'visto' || filtro.tipo == 'novisto')){
    const vistos = resultados.filter(p=>p.visto);
    const noVistos = resultados.filter(p=>!p.visto);
    return (
      <div className={style.contenedorPelis}>
        <div>
          <h3>Vistas ({vistos.length})</h3>
          <div className={style.filaHorizontal}>
            {vistos.length > 0
              ? renderTarjetas(vistos)
              : <div className={style.mensajeError}>No hay películas o series vistas.</div>}
          </div>
        </div>
        <div>
          <h3>No vistas ({noVistos.length})</h3>
          <div className={style.filaHorizontal}>
            {noVistos.length > 0
              ? renderTarjetas(noVistos)
              : <div className={style.mensajeError}>No hay películas o series no vistas.</div>}
          </div>
        </div>
      </div>
    );
  }
  
  
  
  return (
    <div className={style.contenedorPelis}>
    {filtro && (
      <h3>
        Resultados para {filtro.valor} ({resultados.length})
      </h3>
    )}
    <div className={style.filaHorizontal}>
      {resultados.length > 0
        ? renderTarjetas(resultados)
        : <div className={style.mensajeError}>No se encontraron resultados para el filtro seleccionado.</div>}
    </div>
  </div>
    ); 
  }

export default ContenedorPelis;
