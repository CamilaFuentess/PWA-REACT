import ContenedorProductos from '../../Components/ContenedorProductos/ContenedorProductos';
import Titulo from '../../Components/Titulo/Titulo';
import { useCategory } from "../../services/getApi";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import categorys from '../../src/utils/categorys';
import Animacion from '../../Components/Animacion/Animacion';
const Category = () => {
    const { categoryName } = useParams();
   const { t } = useTranslation();

   const category = categorys.find(cat => cat.label === categoryName);
   const { data: productos, notFound } = useCategory(category?.label);
   if (!category) {
    return (
      <Animacion 
        texto={t("notFound")}
        src={"https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json"}
      />
    );
  }

  if (notFound) {
    return (
      <Animacion 
        texto={t("notFound")}
        src={"https://lottie.host/e43e19e6-cf2d-4711-977a-c1e73150dc77/HOorGTcSAF.json"}
      />
    );
  }
  return (
    <div>
      <Titulo texto={t(category.name)} /> 
        <ContenedorProductos productos={productos} />
      
    </div>
  );

};

export default Category;