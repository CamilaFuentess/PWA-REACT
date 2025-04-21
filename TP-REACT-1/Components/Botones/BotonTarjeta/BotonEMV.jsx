import style from './BotonEMV.module.css' 

const BotonEMV = ({texto, visto, accion}) => {
    if(texto=="Modificar"){
        return <button className= {style.estiloModificar} onClick={accion}>{texto}</button> 
    }else if(texto=="Eliminar"){
        return <button className= {style.estiloEliminar} onClick={accion}>{texto}</button> 
    }else if(texto=="Cerrar"){
            return <button className= {style.estiloCerrar} onClick={accion}>{texto}</button> 
    }else if(texto=="Aceptar"){
            return <button className= {style.estiloAceptar} onClick={accion}>{texto}</button>             
    }else if(texto == "Vista"){
            return <button className= {visto ? style.estiloVista : style.estiloNoVista} onClick={accion}>{visto ? "Visto" : "No visto"}</button> 
    }
}; 

export default BotonEMV