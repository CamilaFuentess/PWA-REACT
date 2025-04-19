import { useState } from "react";
import style from './Ordenamiento.module.css'; 

const Ordenamiento = ({manejarOrden}) => {
    const [seleccionado, setSeleccionado] = useState('');
    const opciones = [
        {id:'anioAsc', texto:'Año +', value:'anioAsc'}, 
        {id:'anioDes', texto:'Año -', value:'anioDes'}, 
        {id:'ratingAsc', texto:'Rating +', value:'ratingAsc'}, 
        {id:'ratingDes', texto:'Rating -', value:'ratingDes'}, 
    ];
    const cambio = (evento) => {
        const valor = evento.target.value;
        setSeleccionado(valor); 
        manejarOrden(valor);
    }
    return(
        <div className={style.ordenar} > 
            <h1> Ordenar </h1>
            {opciones.map(op=> (
                <div key={op.id}>
                    <input type="radio" name="orden" id={op.id} value={op.value} checked={seleccionado == op.value} onChange={cambio}/>
                    <label htmlFor={op.id}>{op.texto}</label>
                </div>
            ))}
        </div>
    );
};

export default Ordenamiento; 