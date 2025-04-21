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


const Tarjeta = ({peli}) => {

    const [isOpenTR, setIsOpenTR] = useState(false);

    const handleTR = () =>{
        setIsOpenTR(!isOpenTR)
    };
    
    return (
        <>
        <div className={style.cartaContenido} onClick={handleTR}>
            <div className={`${style.estado} ${peli.visto ? style.visto : style['no-visto']}`}>
                {peli.visto ? 'Visto' : 'No visto'}
            </div>
            <img src={peli.imagen} alt={peli.titulo} className={style.contenidoImagen} />
            <div className={style.informacion}>
                <strong>{peli.titulo}</strong> ({peli.anio})<br />
                <span className={style.tipo}>{peli.tipo}</span>
            </div>
        </div>
            {isOpenTR && <TarjetaResumen peOse={peli} cerrar={handleTR}/> }
        
        </>
    );
};

export default Tarjeta; 