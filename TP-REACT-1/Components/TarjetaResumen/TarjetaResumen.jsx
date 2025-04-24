import React from 'react'
import { useState } from 'react'
import style from './TarjetaResumen.module.css'
import BotonEMV from '../Botones/BotonTarjeta/BotonEMV.jsx'
import TablaDatos from '../TablaDatos/TablaDatos.jsx'
import TarjetaModificar from '../TarjetaModificar/TarjetaModificar.jsx'


const TarjetaResumen = ( {peOse, cerrarTR, peliculasYSeries, actualizarPeliculasYSeries} ) => {
  

//peliculas en useState es innecesario
//no se esta usando realmente para mutar 
// el estado dentro del componente. 
// se podria eliminar y usar peliculasYSeries 
// directamente o mantenerlo solo si en el futuro 
// va a cambiar internamente.
//si se queda, hay que hacer setPeliculas al eliminar.
 
  const [peliculas, setPeliculas] = useState(
      peliculasYSeries
  );
  const [confirmacion, setConfirmacion]=useState(false);

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
  actualizarPeliculasYSeries(nuevoPeliculas);
  localStorage.setItem('peliculasYSeries', JSON.stringify(nuevoPeliculas));
}; 

const eliminarPeli = () => {
  const nuevasPeliculas = peliculasYSeries.filter(pYs => pYs.titulo !== peOse.titulo);
  actualizarPeliculasYSeries(nuevasPeliculas);
  cerrarTR();
};

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
                  {!confirmacion ? (
                    <>
                    <BotonEMV texto={"Eliminar"} visto = {false} accion={() => setConfirmacion(true)}/>

                    {/* vistoPeli({peOse}) está mal armado
                    Le estan pasando un objeto {peOse} en vez de simplemente peOse y adentro acceden mal al .titulo y .visto usando peOse.peOse.
                
                    Deberia ser:
                  <BotonEMV texto={"Vista"} visto={peOse.visto} accion={() => vistoPeli(peOse)} />

                  Y dentro de la funcion:

                  function vistoPeli(peOse) {
                  const nuevoPeliculas = peliculas.map(pYs => {
                    if (pYs.titulo === peOse.titulo) {
                      return { ...pYs, visto: !peOse.visto };
                    }
                    return pYs;
                  });
                  actualizarPeliculasYSeries(nuevoPeliculas);
                  localStorage.setItem('peliculasYSeries', JSON.stringify(nuevoPeliculas));
                }
                  
                  */}  <BotonEMV texto={"Vista"} visto = {peOse.visto} accion={() => vistoPeli({peOse})}/>
                    <BotonEMV texto={"Cerrar"} visto = {false} accion={cerrarTR}/>
                    </>
                    
                  ) : (
                    <div className={style.confirmacion}>
                        <p> Confirma que quiere eliminar <strong>{peOse.titulo}</strong>?</p>
                        <div className= {style.estBotones}> 
                        <BotonEMV texto={"Eliminar"} visto={false} accion={eliminarPeli} />
                        <BotonEMV texto={"Cerrar"} visto={false} accion={() => setConfirmacion(false)} />
                        </div>
                    </div>
                  )}
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TarjetaResumen