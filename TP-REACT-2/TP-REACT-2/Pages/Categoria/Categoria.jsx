import ContenedorProductos from '../../Components/ContenedorProductos/ContenedorProductos';
import Titulo from '../../Components/Titulo/Titulo';
import { useCategory } from "../../services/getApi";
import { useParams } from "react-router-dom";


const Category = () => {
    const { categoryName } = useParams();
    const category = useCategory(categoryName);

  return (
    <div>
      <Titulo texto={categoryName} /> 
        <ContenedorProductos productos={category} />
      
    </div>
  );

};

export default Category;