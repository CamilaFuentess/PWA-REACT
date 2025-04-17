import React from 'react';
import style from './ContenedorPelis.module.css';
import Tarjeta from '../Tarjeta/Tarjeta';

const ContenedorPelis = ({filtro, peliculasYSeries}) => {
   
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

  const resultados = filtrar(); 
  if (filtro && (filtro.tipo == 'visto' || filtro.tipo == 'novisto')){
    const vistos = peliculasYSeries.filter(p=>p.visto);
    const noVistos = peliculasYSeries.filter(p=>!p.visto);
    return (
      <div className={style.contenedorPelis}>
        <div>
          <h3>Vistas ({vistos.length})</h3>
          <div className={style.filaHorizontal}>
            {vistos.length > 0
              ? vistos.map((peli, i) => <Tarjeta peli={peli} i={i}/>)
              : <div className={style.mensajeError}>No hay películas o series vistas.</div>}
          </div>
        </div>
        <div>
          <h3>No vistas ({noVistos.length})</h3>
          <div className={style.filaHorizontal}>
            {noVistos.length > 0
              ? noVistos.map((peli, i) => <Tarjeta  peli={peli}  i={i}/>)
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
      {resultados.length > 0
        ? resultados.map((peli, i)=><Tarjeta peli={peli}  i={i}/>)
        : <div className={style.mensajeError}>No se encontraron resultados para el filtro seleccionado.</div>}
    </div>
  </div>
    ); 
  }

export default ContenedorPelis;
