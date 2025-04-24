import React, { useState, useRef, useEffect } from 'react';

function MenuDesplegable() {
    const [abierto, setAbierto] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setAbierto((prev) => !prev);
    };

    useEffect(() => {
        const handleClickFuera = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
            setAbierto(false);
            }
        };

        document.addEventListener('mousedown', handleClickFuera);
        return () => {
            document.removeEventListener('mousedown', handleClickFuera);
        };
    }, []);

    // Se estan usando classnames aca pero no hay importacion a ningun css
    return (

        <div ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
        <button onClick={toggleMenu} className="boton">
            Menú ▼
        </button>

        {abierto && (
            <div className="menu">
                <div className="opcion">Opción 1</div>
                <div className="opcion">Opción 2</div>
                <div className="opcion">Opción 3</div>
            </div>
        )}
        </div>
    );
}

export default MenuDesplegable;
