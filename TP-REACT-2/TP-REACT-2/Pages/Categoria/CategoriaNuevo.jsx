import ContenedorProductos from '../../Components/ContenedorProductos/ContenedorProductos';
import Titulo from '../../Components/Titulo/Titulo';
import { useCategory } from "../../services/getApi";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Category = () => {
    const { categoryName } = useParams();
    const category = useCategory(categoryName);
   const { t } = useTranslation();

   const [cargando, setCargando] = useState(true);
   useEffect(() => {
       if (productos && Array.isArray(productos)) {
           const timeout = setTimeout(() => {
               setCargando(false); 
           }, 1000);  
           return () => clearTimeout(timeout); 
       }
   }, [productos]);

   const normalizarTexto = (texto) => texto.toLowerCase();
   if(!productos || !Array.isArray(productos)){
       return (
           <Animacion texto={t("loading")} src={"https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json"}/>
       )
   }


  return (
    <div>
      <Titulo texto={t(categoryName)} /> 
        <ContenedorProductos productos={category} />
      
    </div>
  );



        
        const [filtro, setFiltro] = useState("");     
        
        const filtrados = productos.filter(prod =>
            normalizarTexto(prod.name).includes(filtro.toLowerCase()) ||
            normalizarTexto(prod.category).includes(filtro.toLowerCase())
        );

        const noResults = filtrados.length === 0 && filtro.length > 0;

        return(
            <div>
                <div className="p-4 m-4">
                    <InputBusqueda value={filtro} onChange={setFiltro} />
                </div>
                {cargando ? (
                     <Animacion texto={t("loading")} src={"https://lottie.host/b0948dd4-c963-4263-a185-abcab8b58280/a63R6sEPRz.json"}/>
                ): (
                    <>
                        {noResults ? (
                        <Animacion texto={t("noResults", {filtro})} src={"https://lottie.host/e77a65c3-25d1-423b-9dd6-e6774ff153c3/zGThR5teVM.json"}/> 
                    ) : (
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 mt-8"> 
        
                        
                        {filtrados.map(producto => (
                            <Tarjeta key={producto.id} producto={producto} />
                        ))}
                    </div>
                    )}
                    </>
                )}
                
            </div>
        );
    










};

export default Category;