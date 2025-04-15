
import Boton from '../../Components/Botones/EliminarModificar/EliminarModificar.jsx'
import TablaDatos from '../../Components/TablaDatos/TablaDatos.jsx';


const Mati = () => {

    return (
        <>
            <h1>Componentes de Mati</h1>
            <TablaDatos/>
            <Boton texto={"Modificar"}/>
            <Boton texto={"Eliminar"}/> 
            <Boton texto={"Vista"} visto={true}/>
            <Boton texto={"Vista"} visto={false}/>
        </>

    ) 
}; 

export default Mati