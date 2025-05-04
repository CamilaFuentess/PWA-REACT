import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../const/routes';


const TarjetaCat = ({ category }) => {
    const [esFav, setEsFav] = useState(false);
    const navigate = useNavigate();

    const clickTarjeta = (cat) => {
      navigate(`${ROUTES.category}`, { state: { cat: cat }});   
    };

    return (

        <div className="bg-[#3c3a3a] border-10 border-[#b7c2ce] rounded-3xl cursor-pointer transition p-4 min-h-[250px] w-full  [box-shadow:0_0_6px_#b7c2ce,0_0_12px_#b7c2ce]
     hover:[box-shadow:0_0_10px_#b7c2ce,0_0_20px_#b7c2ce]" onClick={() => clickTarjeta(category.name)}>
          <div className="relative">
            <img src={category.image} className="w-full h-44 rounded-3xl object-cover"/>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-base font-semibold text-[#ebeef3]">{category.name}</h3>
            <div className='mt-4 text-center'> 
              <button className="bg-[#f9fafc] text-[#3c3a3a] font-bold px-6 py-3 rounded-full transition transform hover:scale-105 hover:shadow-lg" onClick={() => clickTarjeta(category.name)}>Ver categoria</button>
            </div>
          </div>
        </div>
      
    );
  };
  
  export default TarjetaCat;