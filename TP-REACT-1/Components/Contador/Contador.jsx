import style from "./Contador.module.css"; 

const Contador = ({pelis}) => {
    const total = lista.length ; 
    const porGenero = pelis.reduce((acc, peli) => {
        acc[peli.genero] = (acc[peli.genero] || 0) +1 ;
        return acc; 
    }, {}); 
    
    
    generoSeleccionado 
    ? lista.filter((item) => item.genero == generoSeleccionado).length
    :total ;

    return ( 
        <div className="styles.contador"> 
        <p> Total: {total} </p>
        <p>{generoSeleccionado ? `Total de ${generoSeleccionado}: ${porGenero}` : ''}</p>
        </div>
    );
};

export default Contador;