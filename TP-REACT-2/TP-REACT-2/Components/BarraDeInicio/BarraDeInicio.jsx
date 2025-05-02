import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonBarra from '../Botones/BotonBarra/BotonBarra';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import BotonIdioma from '../Botones/BotonIdioma/BotonIdioma';



const BarraInicio = () => {

    const navigate = useNavigate();

    const [idioma, setIdioma] = useState('es');

    const alternarIdioma = () => {
      setIdioma(prev => (prev === 'es' ? 'en' : 'es'));
    };


    return(
     
        <div className="flex bg-[#262626] items-center w-full justify-around sticky h-[8vh]">
            <BotonBarra 
            texto="Inicio"
            className="bg-[#262626] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" 
            onClick = {() => navigate('/')}
            />

            {/*Drop Down*/}
            <DropdownMenu  />

            <BotonBarra
            texto="Favoritos" 
            className="bg-[#262626] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" 
            onClick={() => navigate('/favoritos')}
            />

            <BotonIdioma 
            className="bg-[#262626] rounded-full cursor-pointer text-base inline-block 
            border-2 border-[#f9fafc]
            [box-shadow:0_0_10px_#f9fafc,0_0_6px_#f9fafc]
            hover:[box-shadow:0_0_15px_#f9fafc,0_0_8px_#f9fafc]"
            idiomaActual = {idioma}
            onClick = {alternarIdioma}
            />
        </div>
        
    );
  };


export default BarraInicio;


