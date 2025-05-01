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
     
        <div className="flex bg-[#92af5a] items-center w-full justify-around sticky h-[8vh]">
            <BotonBarra 
            texto="Inicio"
            className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" 
            onClick = {() => navigate('/')}
            />

            {/*Drop Down*/}
            <DropdownMenu  />

            <BotonBarra
            texto="Favoritos" 
            className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" 
            onClick={() => navigate('/favoritos')}
            />

            <BotonIdioma 
            className="bg-[#92af5a] text-white px-4 py-2 rounded cursor-pointer text-base inline-block border-none" 
            idiomaActual = {idioma}
            onClick = {alternarIdioma}
            />
        </div>
        
    );
  };


export default BarraInicio;


