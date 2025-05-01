//import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import BarraDeInicio from '../BarraDeInicio/BarraDeInicio';
import { ROUTES } from '../../const/routes';
//import BotonIdioma from '../../Components...QUE MAS???';

import LogoImage from '../../Imagenes/Logo/Logo1.jpg';

const Header = () => {

    return(
        <div className="sticky top-0 z-50 bg-[#1e0c42] grid grid-cols-5 gap-4 p-4 items-center">

            {/*Columna 1: Logo*/}
            <div className="col-start-1 w-20">
                <Logo 
                    alt="Logo principal"
                    src={LogoImage}
                />
            </div>

            {/*Columnas 2 a 5: BarraDeInicio (ocupa las 4 columnas)*/}
            <div className="col-start-2 col-span-4 flex justify-center">
            <BarraDeInicio />
            </div>
            
        </div>
    )
}

export default Header;





//OTRA FORMA
/*
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import BarraDeInicio from '../BarraDeInicio/BarraDeInicio';
import InputBusqueda from '../InputBusqueda/InputBusqueda'; // asumido
import { useTranslation } from 'react-i18next';
import TituloImage from '../../Imagenes/Titulo/titulo.png';

const Header = () => {
    const { i18n } = useTranslation();

    const cambiarIdioma = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="sticky top-0 z-50 bg-[#1e0c42] grid grid-rows-2 grid-cols-3 gap-4 p-4 items-center">
*/

            {/*Fila 1, Columna 1: Título*/}
{/*
            <div className="row-start-1 col-start-1 flex justify-center">
                <img
                alt="Título principal"
                src={TituloImage}
                className="max-h-16 object-contain"
                />
            </div>
*/}

            {/*Fila 1, Columna 2: Input de búsqueda*/}
{/*
            <div className="row-start-1 col-start-2">
                <InputBusqueda />
            </div>
*/}

            {/*Fila 1, Columna 3: Selector de idioma*/}
{/*
            <div className="row-start-1 col-start-3 flex justify-end gap-2">
                <button onClick={() => cambiarIdioma('es')} className="text-white border px-2 py-1 rounded hover:bg-white hover:text-black transition">ES</button>
                <button onClick={() => cambiarIdioma('en')} className="text-white border px-2 py-1 rounded hover:bg-white hover:text-black transition">EN</button>
            </div>
*/}

            {/*Fila 2: Barra de navegación (ocupa las 3 columnas)*/}
{/*
            <div className="row-start-2 col-span-3">
                <BarraDeInicio />
            </div>

        </div>
    );
};

export default Header;
*/}

