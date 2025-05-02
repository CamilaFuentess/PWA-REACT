//import {useState} from "react";
import {ROUTES} from '../../const/routes';
//import Header from '../../Components/Header/Header';
import ContenedorProductos from '../../Components/ContenedorProductos/ContenedorProductos';
//import TarjetaInfo from '../../Components/TarjetaInfo/TarjetaInfo';
//import Footer from '../../Components/Footer/Footer';

//import { useTranslation } from 'react-i18next';





//const { t, i18n } = useTranslation();

const Home = () => {

    return (
        <div className="sticky top-[0] z-0 m-0 bg-[rgb(25, 25, 25)]">
            
            {/*Contenedor principal*/}
            <div className="flex justify-between items-start m-[50] flex-[1] max-w-[100%] gap-[20] bg-black">
                <div className="flex flex-wrap gap-[20]">
                    <ContenedorProductos />
                    <h1>lalala</h1>
                </div>
                
                {/*<div>
                    <h1>{t('welcome')}</h1>
                </div>
                
                <button                        
                    onClick={() => i18n.changeLanguage('es')}>
                        {t('button')}
                </button>*/}

                <div>
                    {/*<ContenedorProductos />*/}
                </div>

            </div>

        </div>      
    );

};

export default Home;