import style from './BotonEMV.module.css' 

const BotonEMV = ({texto, visto}) => {
    if(texto=="Modificar"){
        return <button className= {style.estiloModificar}>{texto}</button> 
    }
    else if(texto=="Eliminar"){
        return <button className= {style.estiloEliminar}>{texto}</button> 
    }else if(texto == "Vista"){
        if (visto){
            //setVisto(false);
            return <button className= {style.estiloVista}>Vista</button> 
        }else{
           // setVisto(true);
            return <button className= {style.estiloNoVista}>No Vista</button>
        } 
    }
}; 

export default BotonEMV