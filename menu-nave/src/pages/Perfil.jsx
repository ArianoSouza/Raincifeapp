import {useState} from 'react'
import React from 'react';
import '../style/Perfil.css'


const ProfileScreen = () => {

  let [isLogado, setIsLogado] = useState(false);
  const usuario = {
    nome: 'Laysa',
    cidade: 'Recife - PE',
    email: 'laysinha@hotmail.com',
    telefone: '(81)98624-9892'
  };
  
  if (isLogado === true){
  return (
    <div className="profile-screen">
      <div className="retangulo-bonitinho">
        <div className='imagem'></div>
        <h1>Perfil de {usuario.nome}</h1>
        <h4>Cidade: {usuario.cidade}</h4>
        <h2>E-mail: {usuario.email}</h2>
        <h3>Telefone: {usuario.telefone}</h3>
        <button>Editar Perfil</button>
      </div>
    </div>
  );
}
else {
  return(
    <div className="profile-screen">
      <div className="retangulo-bonitinho-2">
        <h1>Você não está logado</h1>
        <button onMouseDown={()=> setIsLogado(isLogado = true)} className='margin button-login'>LOGAR AGORA</button>
      </div>
    </div>
    
  )
}
};

export default ProfileScreen;