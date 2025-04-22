// Componente separado del contnedorpelis
// RECIBE LA INFORMACION DE LA PELICULA A MOSTRAR A TRAVES DE UN ARREGLO
// contnedorPelis, recibe el filtro del boton y el arreglo de TODAS LAS PELIS 

//ACA IRIA EL POP, MOSTRANDO EL TARJETA RESUMEN. 
//CUANDO SE AGREGA UNA PELI, SE VA AL LOCALSTORAGE. 
// seria poner en una funcion el arreglo que esta en el home. para usarlo en el localstorage. 
import {useState} from 'react';
import React from "react";
import style from '../ContenedorPelis/ContenedorPelis.module.css'; 
import TarjetaResumen from '../TarjetaResumen/TarjetaResumen';
import TarjetaModificar from '../TarjetaModificar/TarjetaModificar'


const Tarjeta = ({peli, peliculasYSeries}) => {

    const [isOpenTR, setIsOpenTR] = useState(false);
    const handleTR = () =>{
        setIsOpenTR(!isOpenTR)
    };
    const [isOpenTM, setIsOpenTM] = useState(false);
    const handleTM = () =>{
        setIsOpenTM(!isOpenTM)
    };
    const [isOpenTM_A, setIsOpenTM_A] = useState(false);
    const handleTM_A = () =>{
        setIsOpenTM_A(!isOpenTM_A)
    };
  
    
    const agregarPeli = (peOse, peliculasYSeries) => {
        console.log("Hola Agregar: ", {peOse})

      /*  setPeliculasYSeries([
            ...peliculasYSeries,
            { peOse }
          ]);*/
    }

    const [peliculas, setPeliculas] = useState(
        peliculasYSeries
    );

    function modificarPeli (peOse) {
          const nuevoPeliculas = peliculas.map(pYs => {
            if (pYs.titulo == peOse.peli.titulo){
                return {
                        ...pYs,
                        director: peOse.peli.director,
                        anio: peOse.peli.anio,
                        tipo: peOse.peli.tipo,
                        rating: peOse.peli.rating,
                        genero: peOse.peli.genero,
                        visto: true,
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
        <div className={style.cartaContenido} >
            <div className={`${style.estado} ${peli.visto ? style.visto : style['no-visto']}`}>
                {peli.visto ? 'Visto' : 'No visto'}
            </div>
            <img src={peli.imagen} alt={peli.titulo} className={style.contenidoImagen} onClick={handleTR}/>
            <div className={style.informacion} onClick={handleTM}>
                <strong>{peli.titulo}</strong> ({peli.anio})<br />
                <span className={style.tipo}>{peli.tipo}</span>
            </div>
            <button onClick={handleTM_A}>---</button>
        </div>
            {isOpenTR && <TarjetaResumen peOse={peli} cerrarTR={handleTR}/> }
            {isOpenTM && <TarjetaModificar peOse={peli} cerrarTM={handleTM}  flagAgregar={false} accionTM={() => modificarPeli({peli})}/> }
            {isOpenTM_A && <TarjetaModificar cerrarTM={handleTM_A}  flagAgregar={true} accionTM={() => agregarPeli({peli}, {peliculasYSeries})}/> }
        </>
    );
};

export default Tarjeta; 