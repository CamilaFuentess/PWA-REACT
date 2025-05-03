import {useState} from "react";
import {ROUTES} from '../../const/routes';
import ContenedorProductos from '../../Components/ContenedorProductos/ContenedorProductos';
import { apiComputadoras, apiDetalles } from "../../services/getApi";
import Titulo from "../../Components/Titulo/Titulo";
import TarjetaCat from "../../Components/Tarjeta/TarjetaCat";

//import { useTranslation } from 'react-i18next';

const categorias = [
  { nombre: "Procesador",    
    imagen: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000065BOX_800.jpg"  },
  { nombre: "Almacenamiento",
    imagen: "https://fullh4rd.com.ar/img/productos/12/hd-ssd-1tb-wd-black-sn850x-m2-nvme-gen4-7300mbs-0.jpg"  },
  { nombre: "Placa",
    imagen: "https://fullh4rd.com.ar/img/productos/3/video-geforce-rtx-4070-ti-super-16gb-gigabyte-windforce-max-oc-0.jpg"  },
  { nombre: "Memoria",
    imagen: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/ItemImages/25960_800.jpg"  }
]




//const { t, i18n } = useTranslation();

const Home = () => {

  
    return (
        <div>
                    <Titulo texto='Todas las Categorias' /> 
            <div className="w-300 flex">
                {categorias.map((categoria) => {
                    return (
                        <div><TarjetaCat category={categoria}/> </div>
                    );
                })}
            </div>
        </div>
      );

};

export default Home;