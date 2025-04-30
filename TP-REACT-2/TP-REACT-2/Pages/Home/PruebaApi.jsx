import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const Home = () => {


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

    const getDettalesComputadora = async () => {
        const dettaleComputadora = await fetch(
            "https://6810f18027f2fdac24136e06.mockapi.io/api/v1/detalleComputadoras/1"
        );
        const detlleParsed = await dettaleComputadora.json(); 
        console.log(detlleParsed);
    }
    
    useEffect(()=> {
        getDettalesComputadora(); 
    })

//const navigate = useNavigate();    //averiguar como funciona y como usarla

//ejemplo del profe, ver como funca 
    const Details = () => {
        const [computadora, setComputadora] = useState();
        const [searchValue, setSearchValue] = useState("1"); 

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
        useEffect(()=> {
            getComputadoras();
        })
        console.log(computadora);
    }


    return (
        <>
        <h1> HOla </h1>
        </>

    );

};

export default Home;