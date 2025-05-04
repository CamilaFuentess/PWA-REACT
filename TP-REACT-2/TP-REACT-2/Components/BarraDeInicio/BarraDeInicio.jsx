import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonBarra from '../Botones/BotonBarra/BotonBarra';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import BotonIdioma from '../Botones/BotonIdioma/BotonIdioma';
import { Player } from '@lottiefiles/react-lottie-player';


const BarraInicio = () => {

    const navigate = useNavigate();
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [idioma, setIdioma] = useState('es');

    const alternarIdioma = () => {
      setIdioma(prev => (prev === 'es' ? 'en' : 'es'));
    };


    return(
     <div className='w-full'> 
      {/*menu responsive*/}
        <div className='flex justify-end sm:hidden p-4'> 
          <button className='text-white text-2xl' onClick={() => setMenuAbierto(!menuAbierto)}>
            <Player autoplay loop src="https://lottie.host/89e726a2-4450-4325-896e-22e1a31b73db/TY7qQ0MQ8V.json"  style={{ height: 40, width: 40 }}/>
            </button>
        </div>
        <div className={`${menuAbierto ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center justify-end sm:justify-around w-full mt-2 sm:mt-0`}>
            <BotonBarra 
            texto="Inicio"
            className="text-white px-4 py-2" 
            onClick = {() => navigate('/home')}
            />

            {/*Drop Down*/}
            <DropdownMenu  />

            <BotonBarra
            texto="Favoritos" 
            className="text-white px-4 py-2" 
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
     </div>
       
        
    );
  };


export default BarraInicio;


