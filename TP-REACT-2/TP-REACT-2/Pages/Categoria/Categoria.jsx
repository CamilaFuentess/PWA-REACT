import { useEffect, useState } from "react";
import {ROUTES} from '../../const/routes';
import ContenedorProductos from '../../Components/ContenedorProductos/ContenedorProductos';
import Titulo from '../../Components/Titulo/Titulo';
import { useLocation, useParams } from 'react-router-dom';
import { apiCategoria } from "../../services/getApi";
import { useLocation } from 'react-router-dom';
import { apicategory } from "../../services/getApi";





//const { t, i18n } = useTranslation();


const Category = () => {
    const location = useLocation();
    const cat = location.state?.cat;

  const [categoria, setCategoria] = useState();
  
  apiCategoria(setCategoria, cat);
    const [category, setcategory] = useState();
 
    apicategory(setcategory, cat)

  return (
    <div>
      <Titulo texto={cat} /> 
        <ContenedorProductos productos={categoria} />
      
    </div>
  );
    return (
      <div>
        <Titulo texto={cat} /> 
          <ContenedorProductos productos={category} />
       
      </div>
    );

};

export default Category;