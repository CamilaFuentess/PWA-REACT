import { useEffect, useState } from "react";

export function apiComputadoras (id) {
    const [notFound, setNotFound] = useState(false);
    const [computadora, setComputadora] = useState(null);
    useEffect(() => {
        const getComputadora = async () => {
            try {
                const computadoraResultado = await fetch(
                    `https://6810f18027f2fdac24136e06.mockapi.io/api/v1/computadoras/${id}`
                );
                if (!computadoraResultado.ok) throw new Error("Not found");
                const compu = await computadoraResultado.json(); 
                if (!compu || Object.keys(compu).length === 0) {
                    setNotFound(true);
                } else {
                    setComputadora(compu);
                }
    
            } catch (error){
                console.log('0020', error);
                setNotFound(true);
            }
        };
        if (id) getComputadora();
    }, [id]);
    return {computadora, notFound}; 
}

export function apiDetalles (id) {
    const [detalle, setDetalle] = useState(null); 
    useEffect(() => {
        const getDetalle = async () => {
            try {
                const detallesResultado = await fetch(
                    `https://6810f18027f2fdac24136e06.mockapi.io/api/v1/detalleComputadoras/${id}`
                );
                const deta = await detallesResultado.json(); 
                setDetalle(deta);
            } catch (error){
                console.log('0020', error);
            }
        };
        if (id) getDetalle();
    }, [id]); 
       return detalle;  
}

export function useCategory(searchValue) {
    const [data, setData] = useState([]);
    const [notFound, setNotFound] = useState(false);
    useEffect(() => {
      const getCategory = async () => {
        try {
          const res = await fetch(
            `https://6810f18027f2fdac24136e06.mockapi.io/api/v1/computadoras/?category=${searchValue}`
          );
          if (!res.ok) throw new Error("Not found");
          const result = await res.json();
          if (!result || Object.keys(result).length === 0) {
            setNotFound(true);
        } else {
            setData(result);
        }
        } catch (error) {
          console.error("Error cargando categoría:", error);
        }
      };
  
      if (searchValue) getCategory();
    }, [searchValue]);
  
    return {data, notFound};
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