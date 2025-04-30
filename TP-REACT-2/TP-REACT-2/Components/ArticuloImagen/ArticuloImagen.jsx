import React from "react";


const ArticuloImagen = ({articulo}) => {

    return (
        <div className="">
            <img src={articulo.imagen} alt="Producto" className="" />
        </div>
    );

};

export default ArticuloImagen;