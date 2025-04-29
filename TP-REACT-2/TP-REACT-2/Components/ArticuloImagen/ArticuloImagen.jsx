import React from "react";


const ArticuloImagen = ({articulo}) => {

    return (
        <div class="">
            <img src={articulo.imagen} alt="Producto" class="" />
        </div>
    );

};

export default ArticuloImagen;