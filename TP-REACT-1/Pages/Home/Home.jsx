import style from './Home.module.css'
import BarraDeInicio from '../../Components/BarraDeInicio/BarraDeInicio.jsx'
import BotonEliminarModificar from '../../Components/Botones/EliminarModificar/EliminarModificar.jsx'
import BotonInicio from '../../Components/Botones/Inicio/Inicio.jsx'
import Mati from './Mati.jsx'

const Home = () => {

    return (
        <>
            <BarraDeInicio/>
            <BotonInicio/>
            <BotonEliminarModificar/>
            <h1>Hola bb</h1>
            <div className={style.recuadro}><Mati/></div>
        </>




    ) 
}; 

export default Home