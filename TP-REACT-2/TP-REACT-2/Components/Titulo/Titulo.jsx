import React from "react";

const Titulo = ({texto}) => {

    return (
        <>
            <div className=" items-center p-2 self-center box-content rounded-2xl">
                <h1 className="mx-auto font-bold text-8xl text-[#7f8084]">{texto}</h1>
            </div>
            
        </>
    )
}

export default Titulo;