import style from './BotonEMV.module.css' 

const BotonEMV = ({texto, visto}) => {
    if(texto=="Modificar"){
        return <button className= {style.estiloModificar}>{texto}</button> 
    }else if(texto=="Eliminar"){
        return <button className= {style.estiloEliminar}>{texto}</button> 
    }else if(texto=="Cerrar"){
            return <button className= {style.estiloCerrar}>{texto}</button> 
    }else if(texto=="Aceptar"){
            return <button className= {style.estiloAceptar}>{texto}</button>             
    }else if(texto == "Vista"){
        if (visto){
            return <button className= {style.estiloVista}>Visto</button> 
        }else{
            return <button className= {style.estiloNoVista}>No Visto</button>
        } 
    }
}; 

export default BotonEMV