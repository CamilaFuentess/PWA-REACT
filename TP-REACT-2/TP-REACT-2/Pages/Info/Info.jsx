import React, { useState, useEffect } from "react";
import Titulo from '../../Components/Titulo/Titulo';
import { useParams } from 'react-router-dom';

import { useLocation } from 'react-router-dom';



const Info = () => {
  //  const { id } = useParams();
    const location = useLocation();
    const id = location.state?.id;
    console.log("id: ", id)

    const [computadora, setComputadora] = useState();
    const [detalle, setDetalle] = useState();
    const [searchValue, setSearchValue] = useState(id);

    //const details = ({valor, art}) => {

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
    //}
    

    if (computadora === undefined) {
        const d = 
        {
            id: "1",
            idComputadora: "1",
            marca: "AMD",
            modelo: "Ryzen 5 5600X",
            fechaLanzamiento: "2020-11-05",
            especificaciones: [
              "Socket AM4",
              "6 núcleos / 12 hilos",
              "Frecuencia base 3.7GHz",
              "Frecuencia turbo 4.6GHz",
              "TDP 65W",
              "Tecnología de 7nm"
            ]
          }
        return <h1>Loading....</h1>;
    }


    return (
        
            <div className="block items-center bg-blue-600 box-border p-4">

                <div className="box-border border-4 p-1 m-1 rounded-2xl">
                    <Titulo texto={computadora.name}></Titulo>
                </div>
                <div className="grid grid-cols-2 m-1">
                    <div className="grid grid-rows-2">
                        <div className="box-content size-70% border-4 p-4 m-1 rounded-2xl">
                            <img src={computadora.imagen} alt="Producto" className="box-border rounded-2xl" />
                        </div>
                        <div className="box-content size-30% border-4 p-4 m-4 rounded-2xl" >
                            <h1 className="text-8xl text-white ">${computadora.precio}</h1>
                        </div>
                    </div>
                    <div className="box-border size-30% border-4 rounded-2xl m-1">
                        <h1 className="text-2xl text-white">{computadora.name}</h1>
                        <h1 className="text-2xl text-white">{detalle.marca}</h1>
                        <h1 className="text-2xl text-white">{detalle.modelo}</h1>
                        <h1 className="text-2xl text-white">{detalle.especificaciones}</h1>
                    </div>
                </div>
            </div>
        
    );

};

export default Info;



