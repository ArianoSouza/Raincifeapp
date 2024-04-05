import React, {useState} from "react";
import {BrowserRouter , Route, Routes, Link} from 'react-router-dom';
 
const Perfil = () => {
 
return(
   <div>
 <h1>Você não está logado</h1>
 <button><Link to="/login">entrar</Link></button>
   </div>
)
}

export default Perfil;