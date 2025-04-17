import React from 'react'
import style from './TarjetaResumen.module.css'
import BotonEMV from '../Botones/BotonTarjeta/BotonEMV.jsx'
import TablaDatos from '../../Components/TablaDatos/TablaDatos.jsx'



const TarjetaResumen = ({arregloPelicula}) => {
  return (
    <>
      <table className= {style.estilo}>
        <tr>
          <td rowSpan={2}><img src={arregloPelicula.imagen} alt="" width={200} /></td><td><TablaDatos arregloPelicula={arregloPelicula}/></td>
        </tr>
        <tr><td><BotonEMV texto={"Modificar"} visto = {false} /></td></tr>
      </table>

    </>
  )
}

export default TarjetaResumen