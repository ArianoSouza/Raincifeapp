import React, {useState} from "react";
import {BrowserRouter , Route, Routes, Link} from 'react-router-dom';
import "../style/Perfil.css"
 
const Perfil = () => {
 
return(
   <div>
 <h1 className="margin">Você não está logado</h1>
 <button className="margin"><Link to="/login">entrar</Link></button>
   </div>
)
}

export default Perfil;