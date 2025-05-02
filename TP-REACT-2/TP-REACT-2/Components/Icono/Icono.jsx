import { FaStar, FaRegStar } from 'react-icons/fa';

const Icono = ({ activo, onClick }) => {
  return (
    <button onClick={onClick} className="text-yellow-400 text-3xl hover:scale-150 transition">
      {activo ? <FaStar /> : <FaRegStar />}
    </button>
  );
};
  export default Icono;