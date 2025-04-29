import React from "react";
//import style from './ArticuloPrecio.module.css';


const ArticuloPrecio = ({articulo}) => {

    return (
        <div class="bg-sky-500/50 flex">
            <h1 class="gap-4">${articulo.precio}</h1>
        </div>
        
    );

};

export default ArticuloPrecio;