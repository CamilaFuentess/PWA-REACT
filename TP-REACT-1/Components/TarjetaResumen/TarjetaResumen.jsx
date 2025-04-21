import React from 'react'
import style from './TarjetaResumen.module.css'
import BotonEMV from '../Botones/BotonTarjeta/BotonEMV.jsx'
import TablaDatos from '../TablaDatos/TablaDatos.jsx'
import TarjetaModificar from '../TarjetaModificar/TarjetaModificar.jsx'


const TarjetaResumen = ( {peOse, cerrar} ) => {
  
  const fBotonEMV = (peOse, texto) =>{
    if (texto == "Visto"){
      
    }else if (texto == "Eliminar"){
  
    }else if (texto == "Modificar"){
        <>
        {  <TarjetaModificar peOse={peOse}/> }
        </>
  
      
    } 
  }

  return (
    <>
      <div className={style.ModalBackArea} >
        <div className={style.ModalArea}>
          <table className= {style.estTabla}>
            <tbody>
              <tr>
                <td ><img src={peOse.imagen} alt="" width={200} /></td><td className= {style.estDato}><TablaDatos peOse={peOse}/></td>
              </tr>
              <tr>
                <td colSpan={2} className= {style.estBotones}>
                  <BotonEMV texto={"Modificar"} visto = {false} accion={fBotonEMV(peOse, "Modificar")} />
                  <BotonEMV texto={"Eliminar"} visto = {false} accion={() => fBotonEMV(peOse, "Eliminar")}/>
                  <BotonEMV texto={"Vista"} visto = {peOse.visto} accion={() => fBotonEMV(peOse, "Visto")}/>
                  <BotonEMV texto={"Cerrar"} visto = {false} accion={cerrar}/>
                </td>
              </tr>
            </tbody>
          </table>
          {  <TarjetaModificar peOse={peOse}/> }
        </div>
      </div>
    </>
  )
}

export default TarjetaResumen