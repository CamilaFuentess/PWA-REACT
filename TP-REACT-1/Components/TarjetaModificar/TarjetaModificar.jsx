import React from 'react'
import { useState } from 'react'
import style from './TarjetaModificar.module.css'
import BotonEMV from '../Botones/BotonTarjeta/BotonEMV.jsx'


const TarjetaResumen = ({peOse}) => {

  const [mTitulo, setMTitulo] = useState(peOse.titulo);
  const [mDirector, setMDirector] = useState(peOse.director);
  const [mEstreno, setMEstreno] = useState(peOse.anio);
  const [mRating, setMRating] = useState(peOse.rating);
  const [mGenero, setMGenero] = useState(peOse.genero);
  const [mTipo, setMTipo] = useState(peOse.tipo);
  
  return (
    <>
        <form>
            <label>Titulo: 
            <input type="text" value={mTitulo} onChange={(e) => setMTitulo(e.target.value)}            /></label>
            <label>Director: 
            <input type="text" value={mDirector} onChange={(e) => setMDirector(e.target.value)}            /></label>
            <label>Estreno: 
            <input type="text" value={mEstreno} onChange={(e) => setMEstreno(e.target.value)}            /></label>
            <label>Rating: 
            <input type="text" value={mRating} onChange={(e) => setMRating(e.target.value)}            /></label>
            <label>Genero: 
            <input type="text" value={mGenero} onChange={(e) => setMGenero(e.target.value)}            /></label>
            <label>Tipo: 
            <input type="text" value={mTipo} onChange={(e) => setMTipo(e.target.value)}            /></label>




        </form>
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