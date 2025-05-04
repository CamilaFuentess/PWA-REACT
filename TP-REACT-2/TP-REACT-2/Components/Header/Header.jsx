//import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import BarraDeInicio from '../BarraDeInicio/BarraDeInicio';
import { ROUTES } from '../../const/routes';
//import BotonIdioma from '../../Components...QUE MAS???';

import LogoImage from '../../Imagenes/Logo/Logo1.jpg';

const Header = () => {

    return(
        <div className="sticky top-0 z-50 bg-[#262626] flex flex-wrap items-center justify-between px-4 py-2">

            {/*Columna 1: Logo*/}
            <div className="w-24">
                <Logo 
                    alt="Logo principal"
                    src={LogoImage}
                />
            </div>

            {/*Columnas 2 a 5: BarraDeInicio (ocupa las 4 columnas)*/}
            <div className="flex-grow">
            <BarraDeInicio />
            </div>
            
        </div>
    )
}

export default Header;
