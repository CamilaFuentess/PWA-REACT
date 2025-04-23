import React from 'react'
import { useState } from 'react'
import style from './TarjetaModificar.module.css'
import BotonEMV from '../Botones/BotonTarjeta/BotonEMV.jsx'


const TarjetaModificar = ({peOse, cerrarTM, flagAgregar, peliculasYSeries, actualizarPeliculasYSeries}) => {

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
      if (pYs.titulo == peOse.peOse.titulo){
          return {
                  ...pYs,
                  titulo: mTitulo,
                  director: mDirector,
                  anio: mEstreno,
                  tipo: mTipo,
                  rating: mRating,
                  genero: mGenero,
                  imagen: mImagen,
              };
      }else{
          return pYs;
      }
    });
    actualizarPeliculasYSeries(nuevoPeliculas);
    cerrarTM();
  };

  function agregarPeli () {
    const p = {
      tipo: mTipo, 
      titulo: mTitulo,
      director: mDirector, 
      anio: mEstreno, 
      genero: mGenero,
      rating: mRating, 
      imagen: mImagen || "https://es.web.img2.acsta.net/pictures/17/09/29/21/15/4233147.jpg",
      visto: false
    };
    const nuevasPeliculas = [...peliculasYSeries, p];
    actualizarPeliculasYSeries(nuevasPeliculas);
    cerrarTM();
  }
 
  return (
    <>
      <div className={style.TMBackArea} >
        <div className={style.TMArea}>
          <form>
            <label className={style.TMLabel}>Titulo: 
              <input className={style.TMInput} type="text" value={mTitulo} onChange={(e) => setMTitulo(e.target.value)}/></label><br />
            <label className={style.TMLabel}>Director: 
              <input className={style.TMInput} type="text" value={mDirector} onChange={(e) => setMDirector(e.target.value)}/></label><br />
            <label className={style.TMLabel}>Estreno: 
              <input className={style.TMInput} type="text" value={mEstreno} onChange={(e) => setMEstreno(e.target.value)}/></label><br />
            <label className={style.TMLabel}>Rating: 
              <input className={style.TMInput} type="text" value={mRating} onChange={(e) => setMRating(e.target.value)}/></label><br />

            <label className={style.TMLabel}>Genero: 
              <select name="genero" className={style.TMInput} defaultValue={mGenero} onChange={(e) => setMGenero(e.target.value)}>
                <option value="Accion">Accion</option>
                <option value="Belica">Belica</option>
                <option value="Ciencia Ficcion">Ciencia Ficcion</option>
                <option value="Comedia">Comedia</option>
                <option value="Drama">Drama</option>
                <option value="Terror">Terror</option>
              </select>
            </label><br />


            <label className={style.TMLabel}>Tipo:
              <input className={style.TMInput} type="text" value={mTipo} onChange={(e) => setMTipo(e.target.value)}/> </label><br />
            <label className={style.TMLabel}>Imagen URL: 
              <input className={style.TMInput} type="text" value={mImagen} onChange={(e) => setMImagen(e.target.value)}/></label><br />
          </form>
          
  

          <BotonEMV texto={"Cerrar"} visto = {false} accion={cerrarTM}/>
          {(flagAgregar) ? <BotonEMV texto={"Aceptar"} accion={agregarPeli}/> :
             <BotonEMV texto={"Aceptar"} accion={() => modificarPeli({peOse})}/>}


        </div>
      </div>
    </>
  )
}

export default TarjetaModificar;


/*            <label className={style.TMLabel}>Genero: </label>
            <input className={style.TMInput} type="text" value={mGenero} onChange={(e) => setMGenero(e.target.value)}            /><br />*/