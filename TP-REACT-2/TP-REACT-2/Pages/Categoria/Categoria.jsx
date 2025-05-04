import {useState} from "react";
import {ROUTES} from '../../const/routes';
import ContenedorProductos from '../../Components/ContenedorProductos/ContenedorProductos';
import Titulo from '../../Components/Titulo/Titulo';
import { useLocation } from 'react-router-dom';
import { apiCategoria } from "../../services/getApi";





//const { t, i18n } = useTranslation();

const Categoria = () => {
    const location = useLocation();
    const cat = location.state?.cat;

    const [categoria, setCategoria] = useState();
 
    apiCategoria(setCategoria, cat)

    return (
      <div>
        <Titulo texto={cat} /> 
          <ContenedorProductos productos={categoria} />
       
      </div>
    );

};

export default Categoria;