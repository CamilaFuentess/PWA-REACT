import { Player } from '@lottiefiles/react-lottie-player';
import { useTranslation } from 'react-i18next';

const InputBusqueda = ({ onChange, value }) => {
    const handleChange = (evento) => {
        onChange(evento.target.value);
    };
    const { t } = useTranslation();
    return (
        <div className="relative w-full">
            <input value={value} onChange={handleChange} placeholder={t("lookProduct")}
                className="pl-12 p-2 border-4 rounded w-full border-[#91adca] focus:border-blue-300 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-300"
            />
            
            <Player autoplay loop
                src="https://lottie.host/038fb609-9cc2-4142-9508-16accf4caf70/HkWizi8LVJ.json" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 w-6 h-6 md:w-11 md:h-11"
            />
        </div>
    );
};

export default InputBusqueda;
