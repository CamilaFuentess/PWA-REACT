import React from 'react'
import { useState } from 'react'
import style from './TarjetaModificar.module.css'
import BotonEMV from '../Botones/BotonTarjeta/BotonEMV.jsx'


const TarjetaResumen = ({peOse, cerrarTM, flagAgregar, accionTM}) => {

  const [mTitulo, setMTitulo] = flagAgregar ? useState() : useState(peOse.titulo);
  const [mDirector, setMDirector] = flagAgregar ? useState() : useState(peOse.director);
  const [mEstreno, setMEstreno] = flagAgregar ? useState() : useState(peOse.anio);
  const [mRating, setMRating] = flagAgregar ? useState() : useState(peOse.rating);
  const [mGenero, setMGenero] = flagAgregar ? useState() : useState(peOse.genero);
  const [mTipo, setMTipo] = flagAgregar ? useState() : useState(peOse.tipo);
  const [mImagen, setMImagen] = flagAgregar ? useState() : useState(peOse.imagen);
  
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
          <BotonEMV texto={"Aceptar"} visto = {false} accion={accionTM} />
        </div>
      </div>
    </>
  )
}

export default TarjetaResumen