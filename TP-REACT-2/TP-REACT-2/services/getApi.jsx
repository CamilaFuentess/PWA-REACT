import React, { useEffect } from "react";

export function apiComputadoras (setComputadora, searchValue) {
    const getComputadoras = async () => {
        try {
            const computadoraResultado = await fetch(
                `https://6810f18027f2fdac24136e06.mockapi.io/api/v1/computadoras/${searchValue}`
            );
            const compu = await computadoraResultado.json(); 
            setComputadora(compu);

        } catch (error){
            console.log('0020', error);
        }
    }

    useEffect(() => {
        getComputadoras();
    }, []);
}

export function apiDetalles (setDetalle, searchValue) {
        const getDetalles = async () => {
            try {
                const detallesResultado = await fetch(
                    `https://6810f18027f2fdac24136e06.mockapi.io/api/v1/detalleComputadoras/${searchValue}`
                );
                const deta = await detallesResultado.json(); 
                setDetalle(deta);
            } catch (error){
                console.log('0020', error);
            }
        }
     
        useEffect(() => {
            getDetalles();
        }, []);    
}

export function apiCategoria (setCategoria, searchValue) {
    const getCategoria = async () => {
        try {
            const categoriaResultado = await fetch(
                `https://6810f18027f2fdac24136e06.mockapi.io/api/v1/computadoras/?categoria=${searchValue}`
            );
            const deta = await categoriaResultado.json(); 
            setCategoria(deta);
        } catch (error){
            console.log('0020', error);
        }
    }
 
    useEffect(() => {
        getCategoria();
    }, []);    
}