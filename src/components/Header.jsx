import React from 'react'

export const Header = ({tema, handleChangeBut}) => {
    return (
        <div className="header">
            <div className="barra"></div>
            <div className="container-icon-btn">
                <img src= {tema? "/images/logo-mobile-modo-noct.svg" : "images/logo-desktop.svg"}  alt="logo-pag" />
                <button 
                className={tema?"Butheader Butdark":" Butheader Butlight"} onClick={handleChangeBut}>
                    {tema? "MODO LIGTH": "MODO DARK"}
                </button>
            </div>
        </div>
    )
}
