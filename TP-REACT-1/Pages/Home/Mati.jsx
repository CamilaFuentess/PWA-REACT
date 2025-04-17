

import TarjetaResumen from '../../Components/TarjetaResumen/TarjetaResumen.jsx';
//<div> <Mati arregloPelis={pelis} /> </div>

const Mati = ({arregloPelis}) => {

    return (
        <>
            <h4>Componentes de Mati</h4>
            <TarjetaResumen arregloPelicula={arregloPelis[0]}/>

        </>

    ) 
}; 

export default Mati