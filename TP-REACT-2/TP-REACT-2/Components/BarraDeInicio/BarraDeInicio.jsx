import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BotonBarra from '../Botones/BotonBarra/BotonBarra';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import BotonIdioma from '../Botones/BotonIdioma/BotonIdioma';
import { Player } from '@lottiefiles/react-lottie-player';
import { ROUTES } from '../../const/routes';


const BarraInicio = () => {

    const navigate = useNavigate();
    const [menuAbierto, setMenuAbierto] = useState(false);
    const { t , i18n } = useTranslation();
    const idiomaActual = i18n.language || 'es';
    
    const alternarIdioma = () => {
      const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
      i18n.changeLanguage(nuevoIdioma);
    };


    return(
     <div className='w-full  border-b border-[#67aaf1]/20 shadow-[0_0_12px_#67aaf144] transition-all z-50'> 
      {/*menu responsive*/}
        <div className='flex justify-end sm:hidden p-4'> 
          <button className='text-white text-2xl' onClick={() => setMenuAbierto(!menuAbierto)}>
            <Player autoplay loop src="https://lottie.host/89e726a2-4450-4325-896e-22e1a31b73db/TY7qQ0MQ8V.json"  style={{ height: 40, width: 40 }}/>
            </button>
        </div>
        <div className={`${menuAbierto ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center justify-end sm:justify-around w-full mt-2 sm:mt-0`}>
            <BotonBarra 
            texto={t("home")} 
            className="text-white  px-4 py-2 transition-all duration-300 ease-in-out" 
            onClick = {() => {navigate(`${ROUTES.home}`); setMenuAbierto(false); }}
            />

            {/*Drop Down*/}
            <DropdownMenu cerrarMenu={() => setMenuAbierto(false)} />

            <BotonBarra
            texto={t("favorites")} 
            className="text-white px-4 py-2 transition-all duration-300 ease-in-out" 
            onClick={() => {navigate(`${ROUTES.favoritos}`); setMenuAbierto(false); }}
            />

            <BotonIdioma 
            className="bg-[#262626] rounded-full cursor-pointer text-base inline-block 
            border-2 border-[#f9fafc]
            [box-shadow:0_0_10px_#f9fafc,0_0_6px_#f9fafc]
            hover:[box-shadow:0_0_15px_#f9fafc,0_0_8px_#f9fafc]"
            idiomaActual = {idiomaActual}
            onClick = {alternarIdioma}
            />
        </div>
     </div>
       
        
    );
  };


export default BarraInicio;


