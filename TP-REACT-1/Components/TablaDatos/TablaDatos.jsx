import React from 'react'
import style from './TablaDatos.module.css'

const Pelicula = ['Titulo','Director','Genero',2020,"./imagen.png"]
const Director = ""

const TablaDatos = ({arregloPelicula}) => {
  return (
    <>
      <table className= {style.estilo}>
        <tr>
          <th>Titulo: </th><td>{arregloPelicula.titulo}</td>
        </tr>
        <tr>
          <th>Director: </th><td>{arregloPelicula.director}</td>
        </tr> 
        <tr>
          <th>Rating: </th><td>{arregloPelicula.rating}</td>
        </tr>
        <tr>
          <th>G&eacute;nero: </th><td>{arregloPelicula.genero}</td>
        </tr>
        <tr>
          <th>Tipo: </th><td>{arregloPelicula.tipo}</td>
        </tr>
        <tr>
          <th>Estreno: </th><td>{arregloPelicula.anio}</td>
        </tr> 

      </table>

    </>
  )
}

export default TablaDatos