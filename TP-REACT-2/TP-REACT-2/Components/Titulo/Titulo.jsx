import React from "react";
import style from './Titulo.module.css';

const Titulo = ({texto}) => {

    return (
        <>
            <div className={style.titulo}>
                <h1>{texto}</h1>
            </div>
            
        </>
    )
}

export default Titulo;
