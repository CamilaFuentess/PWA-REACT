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

export function apicategory (setcategory, searchValue) {
    const getcategory = async () => {
        try {
            const categoryResultado = await fetch(
                `https://6810f18027f2fdac24136e06.mockapi.io/api/v1/computadoras/?category=${searchValue}`
            );
            const deta = await categoryResultado.json(); 
            setcategory(deta);
        } catch (error){
            console.log('0020', error);
        }
    }
 
    useEffect(() => {
        getcategory();
    }, []);    
}




export function apiComponentesPaginado (setComponentes, searchValue, pagina, limite) {
    const getComponentes = async () => {
        try {
            const componenteResultado = await fetch(
                `https://6810f18027f2fdac24136e06.mockapi.io/api/v1/computadoras/${searchValue}&&page=${pagina}&&limit=${limite}`
            );
            const compo = await componenteResultado.json(); 
            setComponentes(compo);

        } catch (error){
            console.log('0020', error);
        }
    }

    useEffect(() => {
        getComponentes();
    }, []);
}

export function apiCompPaginadoCat (setComponentes, searchValue, cat, pagina, limite) {
    const getComponentes = async () => {
        try {
            const componenteResultado = await fetch(
                `https://6810f18027f2fdac24136e06.mockapi.io/api/v1/computadoras/?${cat}=${searchValue}&&page=${pagina}&&limit=${limite}`
            );
            const compo = await componenteResultado.json(); 
            setComponentes(compo);

        } catch (error){
            console.log('0020', error);
        }
    }

    useEffect(() => {
        getComponentes();
    }, []);
}