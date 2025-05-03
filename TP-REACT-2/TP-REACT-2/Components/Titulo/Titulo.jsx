import React from "react";

const Titulo = ({texto}) => {

    return (
        <>
            <div className="bg-[#f9fafc] border border-[#e1e8ef] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center max-w-screen-lg mx-auto">
                <h1 className="text-6xl font-bold font-mono tracking-widest text-[#262626] text-center mb-4 ">{texto}</h1>
            </div>
            
        </>
    )
}

export default Titulo;