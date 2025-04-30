import React from "react";

const Titulo = ({texto}) => {

    return (
        <>
            <div className=" items-center p-2 bg-sky-500/40 self-center box-content rounded-2xl">
                <h1 className="mx-auto">{texto}</h1>
            </div>
            
        </>
    )
}

export default Titulo;