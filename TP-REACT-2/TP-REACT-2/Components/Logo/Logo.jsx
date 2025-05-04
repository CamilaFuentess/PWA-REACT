import React from "react";


const Logo = ({alt, src }) => {
    return(
        <div className="items-center p-2 bg-sky-500/40 self-center box-content rounded-2xl">
            <img src={src} alt={alt}/>
        </div>

    )
};

export default Logo;