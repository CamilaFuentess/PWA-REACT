import React from 'react'
import style from './TablaDatos.module.css'

const Pelicula = ['Titulo','Director','Genero',2020,"./imagen.png"]
const Director = ""

const TablaDatos = () => {
  return (
    <>
      <table className= {style.estilo}>
        <tr>
          <th>Titulo</th><td>{Pelicula[0]}</td>
        </tr>
        <tr>
          <th>Director</th><td>{Pelicula[1]}</td>
        </tr> 
        <tr>
          <th>G&eacute;nero</th><td>{Pelicula[2]}</td>
        </tr>
        <tr>
          <th>Estreno</th><td>{Pelicula[3]}</td>
        </tr> 

      </table>

    </>
  )
}

export default TablaDatos