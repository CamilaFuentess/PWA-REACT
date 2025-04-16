import { useState } from 'react';
import style from './InputBusqueda.module.css'; 

const InputBusqueda = ({ manejarFiltro }) => {
  const [busqueda, setBusqueda] = useState('');
  const handleBuscar = () => {
    if (busqueda.trim() !== '') {
      const tipo = busqueda.includes(' ') ? 'director' : 'titulo';
      manejarFiltro(tipo, busqueda);
    }
  };

  return (
    <div className={style.inputContenedor}>
      <label className={style.label}>Buscar por título o director</label>
      <input className={style.inputBusqueda} type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)}/>
      <button onClick={handleBuscar}>Buscar</button>
    </div>
  );
};

export default InputBusqueda;
