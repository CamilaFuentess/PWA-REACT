import React from 'react'
import { useState } from 'react'
import style from './TarjetaResumen.module.css'
import BotonEMV from '../Botones/BotonTarjeta/BotonEMV.jsx'
import TablaDatos from '../TablaDatos/TablaDatos.jsx'
import TarjetaModificar from '../TarjetaModificar/TarjetaModificar.jsx'


const TarjetaResumen = ( {peOse, cerrarTR, peliculasYSeries} ) => {
  
  const [peliculas, setPeliculas] = useState(
      peliculasYSeries
  );
  function vistoPeli (peOse) {
 
    const nuevoPeliculas = peliculas.map(pYs => {
      if (pYs.titulo == peOse.peOse.titulo){
          return {
                  ...pYs,
                  visto: !peOse.peOse.visto
              }
      }else{
          return pYs;
      }
});
  setPeliculas(nuevoPeliculas);
  localStorage.setItem('peliculasYSeries', JSON.stringify(nuevoPeliculas));
}

  return (
    <>
      <div className={style.TRBackArea} >
        <div className={style.TRArea}>
          <table className= {style.estTabla}>
            <tbody>
              <tr>
                <td ><img src={peOse.imagen} alt="" width={200} /></td><td className= {style.estDato}><TablaDatos peOse={peOse}/></td>
              </tr>
              <tr>
                <td colSpan={2} className= {style.estBotones}>
                  {/*<BotonEMV texto={"Modificar"} visto = {false} accion={() => abrirTM({peOse})} /> */}
                  <BotonEMV texto={"Eliminar"} visto = {false} />
                  <BotonEMV texto={"Vista"} visto = {peOse.visto} accion={() => vistoPeli({peOse})}/>
                  <BotonEMV texto={"Cerrar"} visto = {false} accion={cerrarTR}/>
                </td>
              </tr>
            </tbody>
          </table>
          { /* <TarjetaModificar peOse={peOse}/> */}
        </div>
      </div>
    </>
  )
}

export default TarjetaResumen