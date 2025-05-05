import ContenedorProductos from '../../Components/ContenedorProductos/ContenedorProductos';
import Titulo from '../../Components/Titulo/Titulo';
import { useCategory } from "../../services/getApi";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Category = () => {
    const { categoryName } = useParams();
    const category = useCategory(categoryName);
   const { t } = useTranslation();

  return (
    <div>
      <Titulo texto={t(categoryName)} /> 
        <ContenedorProductos productos={category} />
      
    </div>
  );

};

export default Category;