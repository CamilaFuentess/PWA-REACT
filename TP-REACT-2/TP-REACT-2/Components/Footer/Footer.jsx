import Logo from '../Logo/Logo';
import BotonFooter from '../Botones/BotonFooter/BotonFooter';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return(
        <footer className="bg-[#101010] text-[#b7c2ce] py-4 mt-10">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left" > 
                    {/*Columna  izquierda*/}
                    <div className="flex flex-col justify-center md:items-start items-center text-center md:text-left space-y-1">
                        <p>{t("footer.innovatingSince")} 2022</p>
                        <p>Neuquen, Argentina</p>
                        <p className="text-[#67aaf1] font-semibold">RealTech</p>
                    </div>

                {/*Columna centro*/}
                    <div className="flex flex-col items-center mt-6">
                        <div className='flex flex-col items-center w-20'> 
                        <Logo className="w-24 sm:w-32 rounded-full object-cover" alt="Logo blanco" src={"/Imagenes/Logo/Logo_redondo_1.jpg"}/>
                        </div>
                        <hr className="w-24 border-t border-[#67aaf1]/30 my-4" />
                        <div className="flex gap-4 mt-2 ">
                            <div className="bg-[#3c7ec4] border border-[#67aaf1]/20 rounded-full p-1 w-10 h-10 flex items-center justify-center">
                                <img src="https://images.icon-icons.com/2428/PNG/512/facebook_black_logo_icon_147136.png"
                                onClick={() => window.open('https://www.facebook.com', '_blank')}  className="w-10 h-8 cursor-pointer "
                                />
                            </div>

                            <div className="bg-[#3c7ec4] border border-[#67aaf1]/20 rounded-full p-1 w-10 h-10 flex items-center justify-center">
                                <img src="https://images.icon-icons.com/2973/PNG/512/twitter_logo_icon_186904.png"
                                    onClick={() => window.open('https://www.twitter.com', '_blank')} className="w-8 h-8  cursor-pointer "
                                />
                            </div>
                            
                            <div className="bg-[#3c7ec4] border border-[#67aaf1]/20 rounded-full p-1 w-10 h-10 flex items-center justify-center">
                                <img src="https://images.icon-icons.com/2428/PNG/512/instagram_black_logo_icon_147122.png"
                                    onClick={() => window.open('https://www.instagram.com', '_blank')}  className="w-10 h-10 object-contain cursor-pointer "
                                />
                            </div>
                        </div>
                    </div>
                    {/*Columna derecha*/}
                    <div className="flex flex-col items-center md:items-end justify-center space-y-2">
                        <BotonFooter texto={t("footer.aboutUs")} />

                        <BotonFooter texto={t("footer.legalNotice")} />

                        <BotonFooter texto={t("footer.help")}  />
                    </div>
                </div>
                

                <div className="mt-10 text-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} RealTech. {t("footer.rightsReserved")}</p>
                </div>
            </div>
        </footer>
    )
}


export default Footer;