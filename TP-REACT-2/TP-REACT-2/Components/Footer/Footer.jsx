//import style from './Footer.module.css';
import { useNavigate } from 'react-router-dom';
import BotonFooterImagen from '../Botones/BotonFooterImagen/BotonFooterImagen';
import Logo from '../Logo/Logo';
import BotonFooter from '../Botones/BotonFooter/BotonFooter';
import { ROUTES } from '../../const/routes';

import FacebookIcon from '../../Imagenes/Icons/facebook-redondo-negro.png';
import XIcon from '../../Imagenes/Icons/x-redondo-negro.svg';
import InstagramIcon from '../../Imagenes/Icons/instagram-redondo-negro.svg';
import LogoImage from '../../Imagenes/Logo/Logo2.jpg';

const Footer = () => {

    const navigate = useNavigate();

    return(
        <footer className="bg-[#1e0c42] text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                {/*Columna 1*/}
                <div className="flex flex-col items-center gap-4">
                    <BotonFooterImagen
                        alt="Logo Facebook"
                        href={ROUTES.facebook}
                        src={FacebookIcon}
                    />
                    <BotonFooterImagen
                        alt="Logo x"
                        href={ROUTES.x}
                        src={XIcon}
                    />
                    <BotonFooterImagen
                        alt="Logo instagram"
                        href={ROUTES.instagram}
                        src={InstagramIcon}
                    />
                </div>

                {/*Columna 2*/}
                <div className="flex justify-center">
                    <Logo 
                        alt="Logo blanco"
                        href={ROUTES.inicio}
                        src={LogoImage}
                    />
                </div>

                {/*Columna 3*/}
                <div className="flex flex-col items-center gap-2">
                    <BotonFooter
                        texto="Sobre nosotros"
                        onClick={() => navigate(ROUTES.sobreNosotros)}
                    />

                    <BotonFooter
                        texto="Aviso legal"
                        onClick={() => navigate(ROUTES.avisoLegal)}
                    />

                    <BotonFooter
                        texto="Ayuda"
                        onClick={() => navigate(ROUTES.ayuda)}
                    />
                </div>

            </div>
        </footer>
    )
}


export default Footer;


