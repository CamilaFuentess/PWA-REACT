import React from 'react'
import style from './TarjetaResumen.module.css'
import BotonEMV from '../Botones/BotonTarjeta/BotonEMV.jsx'
import TablaDatos from '../TablaDatos/TablaDatos.jsx'

const fBotonEMV = (arregloPeOse, texto) =>{
  if (texto == "Visto"){
    
  }else if (texto == "Eliminar"){

  }else if (texto == "Modificar"){
    
  } 
}

const TarjetaResumen = ({arregloPelicula}) => {
  {/*
  const [isTarjetaResumenOpen, setTarjetaResumenOpen] = useState(false);
  const openTarjetaResumen = () => {setTarjetaResumenOpen(true);};
  const closeTarjetaResumen = () => {setTarjetaResumenOpen(false);};
  */}

  return (
    <>
      <table className= {style.estTabla}>
        <tbody>
          <tr>
            <td ><img src={arregloPelicula.imagen} alt="" width={200} /></td><td className= {style.estDato}><TablaDatos arregloPelicula={arregloPelicula}/></td>
          </tr>
          <tr>
            <td colSpan={2} className= {style.estBotones}>
              <BotonEMV texto={"Modificar"} visto = {false} onClick={() => fBotonEMV(arregloPelicula, "Modificar")} />
              <BotonEMV texto={"Eliminar"} visto = {false} onClick={() => fBotonEMV(arregloPelicula, "Eliminar")}/>
              <BotonEMV texto={"Vista"} visto = {arregloPelicula.visto} onClick={() => fBotonEMV(arregloPelicula, "Visto")}/>
              <BotonEMV texto={"Cerrar"} visto = {false} onClick={() => fBotonEMV(arregloPelicula, "Eliminar")}/>
            </td>
          </tr>
        </tbody>
      </table>

    </>
  )
}

export default TarjetaResumen