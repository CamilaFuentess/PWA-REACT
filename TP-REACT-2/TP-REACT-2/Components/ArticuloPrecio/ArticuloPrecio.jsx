import React from "react";


const ArticuloPrecio = ({articulo}) => {

    return (
        <div className="flex font-bold ">
            <h1 className="text-5xl text-white ">${articulo.precio}</h1>
        </div>
        
    );

};

export default ArticuloPrecio;