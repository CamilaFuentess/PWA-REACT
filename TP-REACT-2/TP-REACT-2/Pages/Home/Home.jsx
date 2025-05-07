import Titulo from "../../Components/Titulo/Titulo";
import TarjetaCat from "../../Components/Tarjeta/TarjetaCat";
import { useTranslation } from "react-i18next";
import categorys from "../../src/utils/categorys";




const Home = () => {
    
const { t } = useTranslation();



  
  return (
      <div>
        <Titulo texto={t(`allCategories`)} /> 
        <div className="p-8 mt-8 mb-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {categorys.map((categoria) => {
                  return (
                    <TarjetaCat key={categoria.name} category={categoria} />
                  );
              })}
        </div>
      </div>
    );

};

export default Home;