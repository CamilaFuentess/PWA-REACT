import { useState } from 'react';
import style from './InputBusqueda.module.css'; 

const InputBusqueda = ({ manejarFiltro }) => {
  const [busqueda, setBusqueda] = useState('');
  const buscar = () => {
    if (busqueda.trim() !== '') {
      manejarFiltro('ambos', busqueda);
    }
  };

  return (
    <div className={style.inputContenedor}>
      <label className={style.label}>Buscar por título o director</label>
      <input className={style.inputBusqueda} type="text" value={busqueda} onChange={(eBusqueda) => setBusqueda(eBusqueda.target.value)}/>
      <button onClick={buscar}>Buscar</button>
    </div>
  );
};

export default InputBusqueda;
