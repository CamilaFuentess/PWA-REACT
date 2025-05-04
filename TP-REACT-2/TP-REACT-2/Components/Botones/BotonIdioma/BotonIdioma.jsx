import React from 'react';

const BotonIdioma = ({ idiomaActual, onClick, className }) => {
    const imagenSrc = idiomaActual === 'es'
        ? '/Imagenes/Icons/espana.png'
        : '/Imagenes/Icons/reino-unido.png';

    return(
        <div onClick={onClick} className={`cursor-pointer ${className}`}>
        <img src={imagenSrc} alt="Idioma" className="w-8 h-8" />
        </div>
    );
};

export default BotonIdioma;


