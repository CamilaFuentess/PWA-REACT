//import style from './Footer.module.css';
import BotonFooterImagen from '../Botones/BotonFooterImagen/BotonFooterImagen';
import Logo from '../Logo/Logo';
import BotonFooter from '../Botones/BotonFooter/BotonFooter';
import { ROUTES } from '../../const/routes';


const Footer = () => {


    return(
        <footer className="bg-black text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                {/*Columna 1*/}
                <div className="flex flex-col items-center gap-4">
                    <BotonFooterImagen
                        alt="Logo Facebook"
                        href={ROUTES.facebook}
                        src="../../Imagenes/Icons/facebook-redondo-negro.png"
                    />
                    <BotonFooterImagen
                        alt="Logo x"
                        href={ROUTES.x}
                        src="../../Imagenes/Icons/x-redondo-negro.svg"
                    />
                    <BotonFooterImagen
                        alt="Logo instagram"
                        href={ROUTES.instagram}
                        src="../../Imagenes/Icons/instagram-redondo-negro.svg"
                    />
                </div>

                {/*Columna 2*/}
                <div className="flex justify-center">
                    <Logo 
                        alt="Logo blanco"
                        href={ROUTES.inicio}
                        src="../../Imagenes/Logo/Logo2.jpg"
                    />
                </div>

                {/*Columna 3*/}
                <div className="flex flex-col items-center gap-2">
                    <BotonFooter
                        texto="Sobre nosotros"
                        onClick={() => window.location.href = ROUTES.sobreNosotros}
                    />

                    <BotonFooter
                        texto="Aviso legal"
                        onClick={() => window.location.href = ROUTES.avisoLegal}
                    />

                    <BotonFooter
                        texto="Ayuda"
                        onClick={() => window.location.href = ROUTES.ayuda}
                    />
                </div>

            </div>
        </footer>
    )
}


export default Footer;


