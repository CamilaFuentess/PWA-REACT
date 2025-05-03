const BotonFooter = ({texto}) => {
    return(
        <button
            className="text-white hover:underline transition duration-200 bg-transparent border-none cursor-pointer"
        >
        {texto}
        </button>
    );
};


export default BotonFooter;

