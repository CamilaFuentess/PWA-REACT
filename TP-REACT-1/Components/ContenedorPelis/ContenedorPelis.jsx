import React from 'react';
import style from './ContenedorPelis.module.css';
import Tarjeta from '../Tarjeta/Tarjeta';

const ContenedorPelis = ({filtro, peliculasYSeries, orden, setPeliculasYSeries}) => {
   
  const filtrar = () => {
    let resultado = peliculasYSeries; 
    switch(filtro.tipo) {
      case 'ambos': {/**titulo o direcror  */}
        resultado = peliculasYSeries.filter(p => p.titulo.toLowerCase().includes(filtro.valor.toLowerCase()) ||
        p.director.toLowerCase().includes(filtro.valor.toLowerCase()));
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

  const aplicarOrden = (lista) => {
    let resultado = [...lista]; 
  switch (orden) {
    case 'anioAsc':
      resultado.sort((a, b) => b.anio - a.anio);
      break;
    case 'anioDes':
      resultado.sort((a, b) => a.anio - b.anio);
      break;
    case 'ratingAsc':
      resultado.sort((a, b) => b.rating - a.rating);
      break;
    case 'ratingDes':
      resultado.sort((a, b) => a.rating - b.rating);
      break;
    default:
      resultado = lista;
      break;
  }
  return resultado;
  };

  const resultados = filtrar(); 
  const resultadosOrdenados = aplicarOrden(resultados); 
  //comparen con ===
  if (filtro && (filtro.tipo == 'visto' || filtro.tipo == 'novisto')){
    const vistos = aplicarOrden(peliculasYSeries.filter(p=>p.visto));
    const noVistos = aplicarOrden(peliculasYSeries.filter(p=>!p.visto));
    return (
      <div className={style.contenedorPelis}>
        <div>
          <h3>Vistas ({vistos.length})</h3>
          <div className={style.filaHorizontal}>
            {vistos.length > 0
              ? vistos.map((peli) => <Tarjeta key={peli.titulo} peli={peli} peliculasYSeries={peliculasYSeries} setPeliculasYSeries={setPeliculasYSeries}/>)
              : <div className={style.mensajeError}>No hay películas o series vistas.</div>}
          </div>
        </div>
        <div>
          <h3>No vistas ({noVistos.length})</h3>
          <div className={style.filaHorizontal}>
            {noVistos.length > 0
              ? noVistos.map((peli) => <Tarjeta key={peli.titulo}  peli={peli} peliculasYSeries={peliculasYSeries} setPeliculasYSeries={setPeliculasYSeries}/>)
              : <div className={style.mensajeError}>No hay películas o series no vistas.</div>}
          </div>
        </div>
      </div>
    );
  }
 
  
  return (
    <div className={style.contenedorPelis}>
    {filtro && filtro.valor && (
      <h3> Resultados para {filtro.valor} ({resultados.length}) </h3>
    )}
    <div className={style.filaHorizontal}>
      {resultadosOrdenados.length > 0 ? resultadosOrdenados.map((peli)=><Tarjeta key={peli.titulo}  peli={peli} peliculasYSeries={peliculasYSeries} setPeliculasYSeries={setPeliculasYSeries}/>)
        : <div className={style.mensajeError}>No se encontraron resultados para el filtro seleccionado.</div>}
    </div>
  </div>
    ); 
  }

export default ContenedorPelis;
