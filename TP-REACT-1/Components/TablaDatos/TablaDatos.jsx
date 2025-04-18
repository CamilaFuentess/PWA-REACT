//import React from 'react'
import style from './TablaDatos.module.css'



const TablaDatos = ({arregloPelicula}) => {
  return (
    <>
      <table >
        <tbody>
          <tr>
            <td>Titulo: </td><td className= {style.est_td}>{arregloPelicula.titulo}</td>
          </tr>
          <tr>
            <td>Director: </td><td >{arregloPelicula.director}</td>
          </tr> 
          <tr>
            <td>Rating: </td><td className= {style.est_td}>{arregloPelicula.rating}</td>
          </tr>
          <tr>
            <td>G&eacute;nero: </td><td className= {style.est_td}>{arregloPelicula.genero}</td>
          </tr>
          <tr>
            <td>Tipo: </td><td className= {style.est_td}>{arregloPelicula.tipo}</td>
          </tr>
          <tr>
            <td>Estreno: </td><td className= {style.est_td}>{arregloPelicula.anio}</td>
          </tr> 
        </tbody>
      </table>

    </>
  )
}

export default TablaDatos