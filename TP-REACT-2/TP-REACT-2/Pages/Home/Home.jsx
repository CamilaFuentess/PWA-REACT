import {useState} from "react";
import {ROUTES} from '../../const/routes';
import ContenedorProductos from '../../Components/ContenedorProductos/ContenedorProductos';
import { apiComputadoras, apiDetalles } from "../../services/getApi";

//import { useTranslation } from 'react-i18next';





//const { t, i18n } = useTranslation();

const Home = () => {
    const [componente, setComponente] = useState([]);

    useEffect(() => {

    }, []);
  
    return (
      <div>
        <Titulo texto={"componente"} /> 
        {componente.length > 0 ? (
          <ContenedorProductos productos={componente} />
        ) : (
          <p>No tenés componente todavía.</p>
        )}
      </div>
    );

};

export default Home;