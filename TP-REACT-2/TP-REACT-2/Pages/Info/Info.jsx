import React from "react";
import style from './Info.module.css';
import Titulo from '../../Components/Titulo/Titulo';

const Info = () => {

    return (
        
            <div className={style.info}>
                <Titulo texto={"Hola"}></Titulo>
                

            </div>
        
    );

};

export default Info;