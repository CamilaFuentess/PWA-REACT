import React, { useState, useEffect } from "react";
import Titulo from '../../Components/Titulo/Titulo';



const Info = ({articulo}) => {
   // const { id } = useParams();

    const [computadora, setComputadora] = useState();
    const [searchValue, setSearchValue] = useState("1");

    //const details = ({valor, art}) => {

        const getComputadoras = async () => {
            try {
                const computadoraResultado = await fetch(
                    `https://6810f18027f2fdac24136e06.mockapi.io/api/v1/detalleComputadoras/${searchValue}`
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

        
    //}
    
    //details("1")
    console.log(computadora);


    if (computadora === undefined) {
        return <h1>Loading....</h1>;
      }
    return (
        
            <div className="block items-center bg-blue-600 box-border p-4">
                <div className="box-border border-4 p-1 m-1 rounded-2xl">
                    <Titulo texto={articulo.name}></Titulo>
                </div>
                <div className="grid grid-cols-2 m-1">
                    <div className="grid grid-rows-2">
                        <div className="box-content size-70% border-4 p-4 m-1 rounded-2xl">
                            <img src={articulo.coverImage} alt="Producto" className="box-border rounded-2xl" />
                        </div>
                        <div className="box-content size-30% border-4 p-4 m-4 rounded-2xl" >
                            <h1 className="text-8xl text-white ">${articulo.precio}</h1>
                        </div>
                    </div>
                    <div className="box-border size-30% border-4 rounded-2xl m-1">
                        <h1 className="text-2xl text-white">{articulo.name}</h1>
                        <h1 className="text-2xl text-white">{computadora.marca}</h1>
                        <h1 className="text-2xl text-white">{computadora.modelo}</h1>
                        <h1 className="text-2xl text-white">{computadora.especificaciones}</h1>
                    </div>
                </div>

            </div>
        
    );

};

export default Info;