//import {useState} from "react";
import {ROUTES} from '../../const/routes';
//import Header from '../../Components/Header/Header';
//import ContenedorProductos from '../../Components/ContenedorProductos/ContenedorProductos';
//import TarjetaInfo from '../../Components/TarjetaInfo/TarjetaInfo';
//import Footer from '../../Components/Footer/Footer';

//import { useTranslation } from 'react-i18next';



//const { t, i18n } = useTranslation();

const Home = () => {

    return (
        <div className="sticky top-[0] z-0 m-0 bg-[rgb(25, 25, 25)]">

            <div>
                <Header />
            </div>
            
            {/*Contenedor principal*/}
            <div className="flex justify-between items-start m-[50] flex-[1] max-w-[75%] gap-[20]">
                <div className="flex flex-wrap gap-[20]">
                    <ContenedorProductos />
                </div>
                
                {/*<div>
                    <h1>{t('welcome')}</h1>
                </div>
                
                <button                        
                    onClick={() => i18n.changeLanguage('es')}>
                        {t('button')}
                </button>*/}

                <div className="bg-[#92af5a] p-[20] max-w-[25%] h-fit mt-[20] rounded-[10]">

                    {/*Boton agregar*/}
                    <div className="rounded-[10] h-fit w-full mb-[20px] px-[15px] py-[10px] border-[3px] border-[#e5ebd2] box-border">
                        {/*Aca va el boton de agregar*/}
                    </div>
                    <Ordenamiento />
                </div>
            </div>

            <div>
                <TarjetaInfo />
            </div>

            <div>
                <Footer />
            </div>

            <div>

            </div>
        </div>      
    );

};

export default Home;