import Logo from '../Logo/Logo';
import BarraDeInicio from '../BarraDeInicio/BarraDeInicio';

const Header = () => {

    return(
        <div className="sticky top-0 z-50 bg-[#262626] flex flex-wrap items-center justify-between px-4 py-2">

            {/*Columna 1: Logo*/}
            <div className="w-24">
                <Logo 
                    alt="Logo principal"
                    src="/Imagenes/Logo/Logo1.jpg"
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
