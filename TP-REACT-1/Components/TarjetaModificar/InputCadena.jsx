import style from './TarjetaModificar.module.css' 

const InputCadena = ( {Texto}) => {
    const [name, setName] = useState("");

    return
    {
        <>
        <form>
            <label>{Texto}
            <input
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </label>
        </form>
        </>
    }
}; 

export default InputCadena