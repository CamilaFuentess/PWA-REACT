import Tarjeta from "../Tarjeta/Tarjeta";

const ContenedorProductos = ({productos, filtro=null}) => {

    const filtrados = filtro ? productos.filter
    (prod => prod.name.toLowerCase().includes(filtro.toLowerCase())) : productos;

    if (filtrados.length === 0) {
        return <p>No se encontraron elementos</p>;
    }   
  return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 mt-8"> 
            {filtrados.map(producto => (
                <Tarjeta key={producto.id} producto={producto} />
            ))}
        </div>
    );
};

export default ContenedorProductos;
