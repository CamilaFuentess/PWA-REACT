import Logo from '../Logo/Logo';
import BotonFooter from '../Botones/BotonFooter/BotonFooter';
import LogoImage from '../../Imagenes/Logo/Logo2.jpg';

const Footer = () => {


    return(
        <footer className="bg-[#262626] text-white py-4">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left" > 
                    {/*Columna  izquierda*/}
                    <div className="flex flex-col justify-center md:items-start items-center text-center md:text-left space-y-1">
                        <p>Innovando desde el 2022</p>
                        <p>Neuquen, Argentina</p>
                        <p>RealTech Systems</p>
                    </div>

                {/*Columna centro*/}
                <div className="flex flex-col items-center mt-6">
                    <div className='flex flex-col items-center w-20'> 
                    <Logo className="w-24 sm:w-32"alt="Logo blanco" src={LogoImage}/>

                    </div>
                    <hr className="w-24 border-t border-gray-400 my-4" />
                    <div className="flex gap-4 mt-2 ">
                        <div className="bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center">
                            <img src="https://images.icon-icons.com/2428/PNG/512/facebook_black_logo_icon_147136.png"
                            onClick={() => window.open('https://www.facebook.com', '_blank')}  className="w-10 h-8 cursor-pointer "
                            />
                        </div>

                        <div className="bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center">
                            <img src="https://images.icon-icons.com/2973/PNG/512/twitter_logo_icon_186904.png"
                                onClick={() => window.open('https://www.twitter.com', '_blank')} className="w-8 h-8  cursor-pointer "
                            />
                        </div>
                        
                        <div className="bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center">
                            <img src="https://images.icon-icons.com/2428/PNG/512/instagram_black_logo_icon_147122.png"
                                onClick={() => window.open('https://www.instagram.com', '_blank')}  className="w-10 h-10 object-contain cursor-pointer "
                            />
                        </div>
                    </div>
                    </div>
                      {/*Columna derecha*/}
                <div className="flex flex-col items-center md:items-end justify-center space-y-2">
                    <BotonFooter texto="Sobre nosotros" />

                    <BotonFooter texto="Aviso legal" />

                    <BotonFooter texto="Ayuda" />
                </div>
                </div>
                

                <div className="mt-10 text-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} RealTech. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}


export default Footer;