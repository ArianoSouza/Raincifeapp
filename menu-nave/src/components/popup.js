import React, { useState } from "react";
import alertaImg from "../components/Imgs/alerta.png";
import bandeiraImg from "../components/Imgs/bandeira.png";

function Popup() {
    const [isOpen, setIsOpen] = useState(false);

    const alternarPopup = () => {
        setIsOpen(!isOpen);
    };
    const alternarPag = () => {
        
    }

    return (
        <div>
            <div>
            <button className="popup-botão" onClick={alternarPopup}> <img src={alertaImg} alt="Alerta" /></button>
            </div>
            {
                isOpen && (
                    <div className="popup">
                        <div className="popup-inner">
                            <button onClick={alternarPopup}>  <img src={alertaImg} alt="Alerta"/></button>
                            <h2>{"Nome da ruas"}</h2>
                            <h4>{"Proximidades"}</h4>
                            <div className="problema">
                            <h4>{"Situação"}</h4>
                            <button onClick={alternarPag}> <img src={bandeiraImg} alt="bandeira"/> </button>
                            <h4>{"Recomendação"}</h4>
                            </div>

                            <div className="fotos">
                                <h4>fotos</h4>
                                <img src="" alt="Fotos" />
                                <img src="" alt="Fotos" />
                                <img src="" alt="Fotos" />
                                <img src="" alt="Fotos" />
                            </div>
                            <div>
                                <h4>Comentários</h4>
                                <input></input>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Popup;