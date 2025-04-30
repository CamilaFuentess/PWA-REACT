import React from "react";


const ArticuloPrecio = ({articulo}) => {

    return (
        <div class="flex font-bold ">
            <h1 class="text-5xl text-white ">${articulo.precio}</h1>
        </div>
        
    );

};

export default ArticuloPrecio;