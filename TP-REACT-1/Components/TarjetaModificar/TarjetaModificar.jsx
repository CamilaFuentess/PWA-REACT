import React from 'react'
import style from './TarjetaModificar.module.css'
import BotonEMV from '../Botones/BotonTarjeta/BotonEMV.jsx'
import InputCadena from './InputCadena.jsx'


const fBotonEMV = (arregloPeOse, texto) =>{
  if (texto == "Visto"){
    arregloPeOse.visto = !arregloPeOse.visto
  }else if (texto == "Eliminar"){

  }else if (texto == "Modificar"){
    
  } 
}

const TarjetaResumen = ({arregloPelicula}) => {
  return (
    <>
      <InputCadena />
      <InputCadena />
      <InputCadena />
      <InputCadena />
      <BotonEMV texto={"Cerrar"} visto = {false} onClick={() => fBotonEMV(arregloPelicula, "Eliminar")}/>
      <BotonEMV texto={"Aceptar"} visto = {false} onClick={() => fBotonEMV(arregloPelicula, "Eliminar")}/>
        

    </>
  )
}

export default TarjetaResumen