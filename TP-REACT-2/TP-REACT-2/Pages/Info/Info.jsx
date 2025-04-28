import React from "react";
import style from './Info.module.css';
import Titulo from '../../Components/Titulo/Titulo';

const Info = ({articulo}) => {

    return (
        
            <div className={style.info}>
                <Titulo texto={articulo.nombre}></Titulo>

            </div>
        
    );

};

export default Info;