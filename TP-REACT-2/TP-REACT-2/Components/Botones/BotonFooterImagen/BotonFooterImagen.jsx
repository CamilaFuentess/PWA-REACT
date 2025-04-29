const BotonFooterImagen = ({src, alt, onClick}) => {
    return(
    <button
        onClick={onClick}
        className="bg-transparent border-none cursor-pointer transition duration-200"
        >
        <img
            src={src}
            alt={alt}
            className="w-8 h-8 hover:opacity-80"
        />
    </button>
    )
}

export default BotonFooterImagen