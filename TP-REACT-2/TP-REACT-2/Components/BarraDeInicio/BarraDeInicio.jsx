import { useState, useRef, useEffect } from 'react';
import BotonBarra from '../Botones/BotonBarra/BotonBarra';
import BotonIdioma from '../Botones/BotonIdioma/BotonIdioma';

const BarraInicio = () => {

    return(
            <div className="flex bg-[#92af5a] items-center w-full justify-around sticky h-[8vh]">
                <BotonBarra 
                    className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" />

                <BotonBarra 
                    className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" />

                <BotonBarra 
                    className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" />

                <BotonIdioma 
                    className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" />
            </div>
    );
};

export default BarraInicio;

