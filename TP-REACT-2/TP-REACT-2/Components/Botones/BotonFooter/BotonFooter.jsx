const BotonFooter = ({texto, onClick}) => {
    return(
        <button
            onClick={onClick}
            className="text-white hover:underline transition duration-200 bg-transparent border-none cursor-pointer"
        >
        {texto}
        </button>
    );
};


export default BotonFooter;

