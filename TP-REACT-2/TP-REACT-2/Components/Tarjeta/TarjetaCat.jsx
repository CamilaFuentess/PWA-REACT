import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const TarjetaCat = ({ category }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const clickTarjeta = (cat) => {
      navigate(`/category/${category.label}`); 
    };

    return (

        <div className="bg-[#1c1c1c] border-2 border-[#ffffff] rounded-3xl cursor-pointer transition p-4 min-h-[250px] w-full  [box-shadow:0_0_6px_#b7c2ce,0_0_12px_#b7c2ce]
     hover:[box-shadow:0_0_10px_#b7c2ce,0_0_20px_#b7c2ce]" onClick={() => clickTarjeta(category.label)}>
          <div className="relative">
            <img src={category.image} className="w-full h-44 rounded-3xl object-cover"/>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-base font-semibold text-[#ebeef3]">{t(category.name)}</h3>
            <div className='mt-4 text-center'> 
              <button className="bg-[#000000] text-[#67aaf1] font-bold px-6 py-3 rounded-full 
             border border-[#67aaf1]
             hover:bg-[#67aaf1] hover:text-black 
             transition transform hover:scale-105 hover:shadow-[0_0_15px_#67aaf1aa]"onClick={clickTarjeta(category.label)}>{t("viewCategorie")}</button>
            </div>
          </div>
        </div>
      
    );
  };
  
  export default TarjetaCat;