import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../style/Registrar.css";


const Registrar = () =>  {
const entrarLogin = useNavigate();

const register = [
    {
      path:"/registrar",
      name:"Registrar",
    },
]
    return(
     <div className="body-register">
     <div className="wrapper-register" >
    <form action="">
     <h1> Registre-se</h1>
     <div className="input-box-register">
        <input type="text" placeholder="Name" />
        <FaUser className="icon-register"/>
     </div>
       <div className="input-box-register">
     <input type="text" placeholder="E-mail" />
     <FaUser className="icon-register"/>
    </div>
   <div className="input-box-register">
    <input type="text" placeholder="Confirmar E-mail"/>
    <FaUser className="icon-register"/>
</div>
<div className="input-box-register">
    <input type="password" placeholder="senha" />
    <FaLock className="icon-register"/>
</div>
<div className="input-box-register">
    <input type="password" placeholder="confirmar senha"/>
    <FaLock className="icon-register"/>
</div>

<button onClick={()=>{
            entrarLogin("/login")
         }} >confirmar</button>

    </form>
     </div>
     </div>
    )
}

export default Registrar;