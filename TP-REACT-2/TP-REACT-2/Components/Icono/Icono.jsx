import { FaStar, FaRegStar } from 'react-icons/fa';

const Icono = ({ activo, onClick }) => {
  return (
    <button onClick={onClick} className={`text-3xl hover:scale-150 transition ${ activo ? 'text-[#1e8bff]' : 'text-gray-400'} `}>
      {activo ? <FaStar /> : <FaRegStar />}
    </button>
  );
};
  export default Icono;