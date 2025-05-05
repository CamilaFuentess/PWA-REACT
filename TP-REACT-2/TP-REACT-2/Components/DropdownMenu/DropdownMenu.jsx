import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {ROUTES} from '../../const/routes';
import BotonBarra from '../Botones/BotonBarra/BotonBarra';
import { useTranslation } from 'react-i18next';

const DropdownMenu = ({cerrarMenu}) => {
    const [abierto, setAbierto] = useState(false);
    const menuRef = useRef(null);
    const {t} = useTranslation();
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setAbierto(!abierto);
    };

    // Cierra el dropdown si se hace clic fuera del mismo
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setAbierto(false);                
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const clickBoton = (cat) => {
        setAbierto(false);
        if (cerrarMenu) cerrarMenu();
        navigate(`/category/${cat.toLowerCase()}`);
      };

    return(
        <div className="relative" ref={menuRef}>
            {/* Botón principal */}
            <BotonBarra
                texto={t("categories")}
                className="bg-[#262626] text-white px-4 py-2 rounded cursor-pointer border-none"
                onClick={toggleDropdown}
            />

            {/* Menú desplegable */}
            {abierto && (
                <div className="absolute top-full mt-2 bg-[#ebeef3] shadow-lg rounded z-10">
                    <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left" onClick={() => clickBoton("Procesador")}>{t("Procesador")}</button>
                    <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left" onClick={() => clickBoton("Placa")}>{t("Placa")}</button>
                    <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left" onClick={() => clickBoton("Memoria")}>{t("Memoria")}</button>
                    <button className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left" onClick={() => clickBoton("Almacenamiento")}>{t("Almacenamiento")}</button>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
