import React from 'react'
import style from './TablaDatos.module.css'



const TablaDatos = ({peOse}) => {
  return (
    <>
      <table >
        <tbody>
          <tr>
            <td className={style.titulo}>Titulo: </td><td className= {style.est_td}>{peOse.titulo}</td>
          </tr>
          <tr>
            <td className={style.titulo}>Director: </td><td className= {style.est_td}>{peOse.director}</td>
          </tr> 
          <tr>
            <td className={style.titulo}>Rating: </td><td className= {style.est_td}>{peOse.rating}</td>
          </tr>
          <tr>
            <td className={style.titulo}>G&eacute;nero: </td><td className= {style.est_td}>{peOse.genero}</td>
          </tr>
          <tr>
            <td className={style.titulo}>Tipo: </td><td className= {style.est_td}>{peOse.tipo}</td>
          </tr>
          <tr>
            <td className={style.titulo}>Estreno: </td><td className= {style.est_td}>{peOse.anio}</td>
          </tr> 
        </tbody>
      </table>

    </>
  )
}

export default TablaDatos