//import {useState} from "react";
import {ROUTES} from '../../const/routes';
import Header from '../../Components/Header/Header';
import ContenedorProductos from '../../Components/ContenedorProductos/ContenedorProductos';
import TarjetaInfo from '../../Components/TarjetaInfo/TarjetaInfo';
import Ordenamiento from '../../Components/Ordenamiento/Ordenamiento';
import Footer from '../../Components/Footer/Footer';



const Home = () => {

    return (
        <div class="sticky top-[0] z-0 m-0 bg-[rgb(25, 25, 25)]">

            <div>
                <Header />
            </div>
            
            {/*Contenedor principal*/}
            <div class="flex justify-between items-start m-[50] flex-[1] max-w-[75%] gap-[20]">
                <div class="flex flex-wrap gap-[20]">
                    <ContenedorProductos />
                </div>
                
                
                <div class="bg-[#92af5a] p-[20] max-w-[25%] h-fit mt-[20] rounded-[10]">

                    {/*Boton agregar*/}
                    <div class="rounded-[10] h-fit w-full mb-[20px] px-[15px] py-[10px] border-[3px] border-[#e5ebd2] box-border">
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