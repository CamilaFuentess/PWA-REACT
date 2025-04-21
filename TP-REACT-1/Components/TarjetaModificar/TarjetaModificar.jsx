import React from 'react'
import { useState } from 'react'
import style from './TarjetaModificar.module.css'
import BotonEMV from '../Botones/BotonTarjeta/BotonEMV.jsx'


const TarjetaResumen = ({peOse, cerrarTM}) => {

  const [mTitulo, setMTitulo] = useState(peOse.titulo);
  const [mDirector, setMDirector] = useState(peOse.director);
  const [mEstreno, setMEstreno] = useState(peOse.anio);
  const [mRating, setMRating] = useState(peOse.rating);
  const [mGenero, setMGenero] = useState(peOse.genero);
  const [mTipo, setMTipo] = useState(peOse.tipo);
  const [mImagen, setMImagen] = useState(peOse.imagen);
  
  return (
    <>
      <div className={style.TMBackArea} >
        <div className={style.TMArea}>
          <form>
            <label className={style.TMLabel}>Titulo: </label>
            <input className={style.TMInput} type="text" value={mTitulo} onChange={(e) => setMTitulo(e.target.value)}            /><br />
            <label className={style.TMLabel}>Director: </label>
            <input className={style.TMInput} type="text" value={mDirector} onChange={(e) => setMDirector(e.target.value)}            /><br />
            <label className={style.TMLabel}>Estreno: </label>
            <input className={style.TMInput} type="text" value={mEstreno} onChange={(e) => setMEstreno(e.target.value)}            /><br />
            <label className={style.TMLabel}>Rating: </label>
            <input className={style.TMInput} type="text" value={mRating} onChange={(e) => setMRating(e.target.value)}            /><br />
            <label className={style.TMLabel}>Genero: </label>
            <input className={style.TMInput} type="text" value={mGenero} onChange={(e) => setMGenero(e.target.value)}            /><br />
            <label className={style.TMLabel}>Tipo: </label>
            <input className={style.TMInput} type="text" value={mTipo} onChange={(e) => setMTipo(e.target.value)}            /><br />
            <label className={style.TMLabel}>Imagen URL: </label>
            <input className={style.TMInput} type="text" value={mImagen} onChange={(e) => setMImagen(e.target.value)}            /><br />




          </form>
          <BotonEMV texto={"Cerrar"} visto = {false} accion={cerrarTM}/>
          <BotonEMV texto={"Aceptar"} visto = {false} />
        </div>
      </div>
    </>
  )
}

export default TarjetaResumen


/*
      <InputCadena etiqueta={"Titulo: "} valor={peOse.titulo}/>
      <InputCadena etiqueta={"Director: "} valor={peOse.director}/>
      <InputCadena etiqueta={"Estreno: "} valor={peOse.anio}/>
      <InputCadena etiqueta={"Genero: "} valor={peOse.genero}/>
      <InputCadena etiqueta={"Rating: "} valor={peOse.rating}/>
      <InputCadena etiqueta={"Tipo: "} valor={peOse.tipo}/>
      <BotonEMV texto={"Cerrar"} visto = {false} />
      <BotonEMV texto={"Aceptar"} visto = {false} />
      */