import Titulo from "../../Components/Titulo/Titulo";
import TarjetaCat from "../../Components/Tarjeta/TarjetaCat";
import { useTranslation } from "react-i18next";

import { apiComponentesPaginado, apiCompPaginadoCat } from "../../services/getApi";
import { useEffect, useState } from "react";

const categorys = [
  { 
    name: "Procesador",    
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000065BOX_800.jpg"  },
  { 
    name: "Almacenamiento",
    image: "https://fullh4rd.com.ar/img/productos/12/hd-ssd-1tb-wd-black-sn850x-m2-nvme-gen4-7300mbs-0.jpg"  },
  { 
    name: "Placa de video",
    image: "https://fullh4rd.com.ar/img/productos/3/video-geforce-rtx-4070-ti-super-16gb-gigabyte-windforce-max-oc-0.jpg"  },
  { 
    name: "Memoria",
    image: "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/ItemImages/25960_800.jpg"  }
]





const Home = () => {
    
const { t } = useTranslation();

const [componentes, setComponentes] = useState();
const [limite, setLimite] = useState(3);
const [pagina, setPagina] = useState(1);

useEffect(() => {
  apiComponentesPaginado (setComponentes, value, pagina, limite);
},[]);

  
  return (
      <div>
        <Titulo texto={t(`allCategories`)} /> 
        <div className="p-8 mt-8 mb-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {categorys.map((categoria) => {
                  return (
                    <TarjetaCat key={categoria.name}
                      category={{...categoria, label: t(categoria.name)
            }}
          />
                  );
              })}
        </div>
      </div>
    );


};

export default Home;