// Componente separado del contnedorpelis
// RECIBE LA INFORMACION DE LA PELICULA A MOSTRAR A TRAVES DE UN ARREGLO
// contnedorPelis, recibe el filtro del boton y el arreglo de TODAS LAS PELIS 

//ACA IRIA EL POP, MOSTRANDO EL TARJETA RESUMEN. 
//CUANDO SE AGREGA UNA PELI, SE VA AL LOCALSTORAGE. 
// seria poner en una funcion el arreglo que esta en el home. para usarlo en el localstorage. 

import React from "react";
import style from '../ContenedorPelis/ContenedorPelis.module.css'; 

const Tarjeta = ({peli}) => {
    return (
        <div className={style.cartaContenido}>
            <div className={`${style.estado} ${peli.visto ? style.visto : style['no-visto']}`}>
                {peli.visto ? 'Visto' : 'No visto'}
            </div>
            <img src={peli.imagen} alt={peli.titulo} className={style.contenidoImagen} />
            <div className={style.informacion}>
                <strong>{peli.titulo}</strong> ({peli.anio})<br />
                <span className={style.tipo}>{peli.tipo}</span>
            </div>
        </div>
    );
};

export default Tarjeta; 