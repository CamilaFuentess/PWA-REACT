import React from "react";


const Logo = ({alt, src }) => {
    return(
        <img className="items-center p-1 self-center box-content rounded-2xl rounded-full object-cover" src={src} alt={alt}/>

    )
};

export default Logo;