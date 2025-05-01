import React from 'react';

const BotonBarra = ({ texto, className, onClick }) => {
    return (
        <div className={`items-center p-2 bg-sky-500/40 self-center box-content rounded-2xl ${className}`} onClick={onClick}>
            <h1 className="mx-auto">{texto}</h1>
        </div>
    );
};


export default BotonBarra;


