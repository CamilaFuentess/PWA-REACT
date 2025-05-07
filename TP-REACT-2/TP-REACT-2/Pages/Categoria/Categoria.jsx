import ContenedorProductos from '../../Components/ContenedorProductos/ContenedorProductos';
import Titulo from '../../Components/Titulo/Titulo';
import { useCategory } from "../../services/getApi";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import categorys from '../../src/utils/categorys';

const Category = () => {
    const { categoryName } = useParams();
   const { t } = useTranslation();

   const category = categorys.find(cat => cat.label === categoryName);
   const productos = useCategory(category.label);
  return (
    <div>
      <Titulo texto={t(category.name)} /> 
        <ContenedorProductos productos={productos} />
      
    </div>
  );

};

export default Category;