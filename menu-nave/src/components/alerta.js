import React, { useState } from 'react';
import alertaImg from "../components/Imgs/alerta.png"

const Alerta = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <button onClick={handleAlert}>Mostrar Alerta</button>
      {showAlert && (
        <div className="alert">
          <p>Este é um alerta!</p>
          <button onClick={handleCloseAlert}>Fechar</button>
        </div>
      )}
    </div>
  );
};

export default Alerta;