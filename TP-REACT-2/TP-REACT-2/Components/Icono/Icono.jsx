import { FaStar, FaRegStar } from 'react-icons/fa';

const Icono = ({ activo, onClick }) => {
  return (
    <button onClick={onClick} className="text-yellow-400 text-2xl hover:scale-110 transition">
      {activo ? <FaStar /> : <FaRegStar />}
    </button>
  );
};
  export default Icono;