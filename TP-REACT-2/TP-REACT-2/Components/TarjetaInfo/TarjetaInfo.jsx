import React from "react";

const TarjetaInfo = ({articulo}) => {

    return (
        <>
            <div className="max-w-sm  items-center p-2 bg-sky-500/40 self-center ">
                <h1 className="mx-auto">{articulo.nombre}</h1>
            </div>
            
        </>
    )
}

export default TarjetaInfo;