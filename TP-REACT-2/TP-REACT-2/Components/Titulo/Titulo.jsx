import React from "react";

const Titulo = ({texto}) => {

    return (
        <>
            <div className="max-w-screen-lg mx-auto mt-10 border-4 border-[#67aaf1] rounded-2xl 
            p-6 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]  shadow-[0_0_25px_#67aaf133] text-center 
            transition-all duration-300">
                <h1 className="text-5xl sm:text-6xl  font-mono  font-extrabold  tracking-widest text-[#67aaf1] drop-shadow-[0_0_10px_#67aaf1aa]">{texto}</h1>
            </div>
            
        </>
    )
}

export default Titulo;