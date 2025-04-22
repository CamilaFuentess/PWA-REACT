import { useState } from 'react';
import style from './InputBusqueda.module.css'; 
import TarjetaModificar from '../TarjetaModificar/TarjetaModificar'

const InputBusqueda = ({ manejarFiltro }) => {

  const [busqueda, setBusqueda] = useState('');
  const buscar = () => {
    if (busqueda.trim() !== '') {
      manejarFiltro('ambos', busqueda);
    }
  };

  return (
    <>
      <div className={style.inputContenedor}>
        <input className={style.inputBusqueda} type="text" placeholder="Buscar por título o director" value={busqueda} onChange={(eBusqueda) => setBusqueda(eBusqueda.target.value)}/>
        <button onClick={buscar}>Buscar</button>
      </div>
    </>
  );
};

export default InputBusqueda;

