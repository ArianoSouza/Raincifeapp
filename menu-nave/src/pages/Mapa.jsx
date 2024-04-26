import React from "react";
import mapa from "../components/Imgs/mapa recife teste.png"
import "../style/Mapa.css"

const Mapa = () => {

  const abrirLocal = () =>{ 
      console.log("abriu")
  }
return(
   <div>
 <h1 className="margin">Mapa page</h1>
 <div >
  <button className="button-mapa margin" onClick={abrirLocal}></button>
  <img src={mapa} alt=""  className="margin"/>
 </div>
   </div>
)
}

export default Mapa;