
const InputBusqueda = ({ onChange, value }) => {
    const handleChange = (evento) => {
        onChange(evento.target.value);
    };

    return (
        <input 
            value={value} 
            onChange={handleChange} 
            placeholder="Buscar producto..."
            className="p-2 border rounded w-full"
        />
    );
};

export default InputBusqueda;
