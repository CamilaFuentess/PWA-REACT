import React from 'react'
import { useState } from 'react'
import style from './TarjetaModificar.module.css'
import BotonEMV from '../Botones/BotonTarjeta/BotonEMV.jsx'


const TarjetaResumen = ({peOse, cerrarTM, flagAgregar, peliculasYSeries}) => {

  const [mTitulo, setMTitulo] = flagAgregar ? useState() : useState(peOse.titulo);
  const [mDirector, setMDirector] = flagAgregar ? useState() : useState(peOse.director);
  const [mEstreno, setMEstreno] = flagAgregar ? useState() : useState(peOse.anio);
  const [mRating, setMRating] = flagAgregar ? useState() : useState(peOse.rating);
  const [mGenero, setMGenero] = flagAgregar ? useState() : useState(peOse.genero);
  const [mTipo, setMTipo] = flagAgregar ? useState() : useState(peOse.tipo);
  const [mImagen, setMImagen] = flagAgregar ? useState() : useState(peOse.imagen);


  const [peliculas, setPeliculas] = useState(
      peliculasYSeries
  );
  function modificarPeli (peOse) {
 
    const nuevoPeliculas = peliculas.map(pYs => {
      console.log("Peose: ", peOse);
      console.log("peliculas: ", peliculas);
      if (pYs.titulo == peOse.peOse.titulo){
        console.log("Peose: ", peOse);
          return {
                  ...pYs,
                  titulo: mTitulo,
                  director: mDirector,
                  anio: mEstreno,
                  tipo: mTipo,
                  rating: mRating,
                  genero: mGenero,
              }
      }else{
          return pYs;
      }
});
  setPeliculas(nuevoPeliculas);
  console.log("Nuevo",nuevoPeliculas);
  localStorage.setItem('peliculasYSeries', JSON.stringify(nuevoPeliculas));
}


  return (
    <>
      <div className={style.TMBackArea} >
        <div className={style.TMArea}>
          <form>
            <label className={style.TMLabel}>Titulo: </label>
            <input className={style.TMInput} type="text" value={mTitulo} onChange={(e) => setMTitulo(e.target.value)}            /><br />
            <label className={style.TMLabel}>Director: </label>
            <input className={style.TMInput} type="text" value={mDirector} onChange={(e) => setMDirector(e.target.value)}        /><br />
            <label className={style.TMLabel}>Estreno: </label>
            <input className={style.TMInput} type="text" value={mEstreno} onChange={(e) => setMEstreno(e.target.value)}          /><br />
            <label className={style.TMLabel}>Rating: </label>
            <input className={style.TMInput} type="text" value={mRating} onChange={(e) => setMRating(e.target.value)}            /><br />
            <label className={style.TMLabel}>Genero: </label>
            <input className={style.TMInput} type="text" value={mGenero} onChange={(e) => setMGenero(e.target.value)}            /><br />
            <label className={style.TMLabel}>Tipo: </label>
            <input className={style.TMInput} type="text" value={mTipo} onChange={(e) => setMTipo(e.target.value)}                /><br />
            <label className={style.TMLabel}>Imagen URL: </label>
            <input className={style.TMInput} type="text" value={mImagen} onChange={(e) => setMImagen(e.target.value)}            /><br />
          </form>
          
  

          <BotonEMV texto={"Cerrar"} visto = {false} accion={cerrarTM}/>
          {(flagAgregar) ? <BotonEMV texto={"Aceptar"} visto = {truee} accion={() => modificarPeli({peOse})}/> :
             <BotonEMV texto={"Aceptar"} visto = {false} accion={() => modificarPeli({peOse})}/>}


        </div>
      </div>
    </>
  )
}

export default TarjetaResumen