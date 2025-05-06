import Logo from '../Logo/Logo';
import BarraInicio from '../BarraDeInicio/BarraDeInicio';

const Header = () => {

    return(
        <div className="sticky top-0 z-50 bg-[#191919] flex flex-wrap items-center justify-between px-4 py-2">

            {/*Columna 1: Logo*/}
            <div className="w-20">
                <Logo 
                    alt="Logo principal"
                    src="/Imagenes/Logo/Logo1.jpg"
                />
            </div>

            {/*Columnas 2 a 5: BarraDeInicio (ocupa las 4 columnas)*/}
            <div className="flex-grow">
            <BarraInicio />
            </div>
            
        </div>
    )
}

export default Header;
