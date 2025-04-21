import React from 'react'
import style from './TablaDatos.module.css'



const TablaDatos = ({peOse}) => {
  return (
    <>
      <table >
        <tbody>
          <tr>
            <td>Titulo: </td><td className= {style.est_td}>{peOse.titulo}</td>
          </tr>
          <tr>
            <td>Director: </td><td >{peOse.director}</td>
          </tr> 
          <tr>
            <td>Rating: </td><td className= {style.est_td}>{peOse.rating}</td>
          </tr>
          <tr>
            <td>G&eacute;nero: </td><td className= {style.est_td}>{peOse.genero}</td>
          </tr>
          <tr>
            <td>Tipo: </td><td className= {style.est_td}>{peOse.tipo}</td>
          </tr>
          <tr>
            <td>Estreno: </td><td className= {style.est_td}>{peOse.anio}</td>
          </tr> 
        </tbody>
      </table>

    </>
  )
}

export default TablaDatos