import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

/*
const apis = () => {
   
    const getComputadoras = async () => {
        const computadorasRes = await fetch(
            "https://6810f18027f2fdac24136e06.mockapi.io/api/v1/computadoras"
        );
        const computadorasParsed = await computadorasRes.json(); 
        console.log(computadorasParsed);
    }
    useEffect(()=> {
        getComputadoras(); 
    })
    
    
    const getDetallesComputadora = async () => {
        const dettaleComputadora = await fetch(
            "https://6810f18027f2fdac24136e06.mockapi.io/api/v1/detalleComputadoras/1"
        );
        const detalleParsed = await dettaleComputadora.json(); 
        console.log(detalleParsed);
        
    }
    useEffect(()=> {
        getDetallesComputadora(); 
    })
*/

    //const navigate = useNavigate();    //averiguar como funciona y como usarla

    //ejemplo del profe, ver como funca 
    const details = () => {
        const [computadora, setComputadora] = useState();


        const getComputadoras = async () => {
            try {
                const computadoraResultado = await fetch(
                    `https://6810f18027f2fdac24136e06.mockapi.io/api/v1/computadoras/${busqueda}`
                );
                const compu = await computadoraResultado.json(); 

                setComputadora(compu);
            } catch (error){
                console.log('0020', error);
            }
        }
        useEffect(()=> {
            getComputadoras();
        })
        console.log(computadora);
    }


export default details;