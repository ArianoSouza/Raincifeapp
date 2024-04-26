import React, { useState } from "react";
import mapa from "../components/Imgs/mapa recife teste.png"
import "../style/Mapa.css"
import Popup from "../components/popup";
import alerta from "../components/alerta";
import alertaImg from "../components/Imgs/alerta.png";
import bandeiraImg from "../components/Imgs/bandeira.png";



const Mapa = () => {
  const [isOpen, setIsOpen] = useState(false);

  const alternarPopup = () => {
      setIsOpen(!isOpen);
  };
  const alternarPag = () => {
      
  }
  
return(
  <div>
 <div className="container-mapa">
  <button className="button-mapa margin" id="botao-mapa" ></button> 
  <img src={mapa} alt=""  className="margin"/>
 </div>

   </div>
)
}

   /*<div>
 <div className="container-mapa">
  <button className="button-mapa margin" id="botao-mapa" onClick={abrirLocal}></button>
  <img src={mapa} alt=""  className="margin"/>
 </div>
   </div>
)
}*/

export default Mapa;