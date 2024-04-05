
import { FaLock, FaUser } from "react-icons/fa";
import { Link,  useNavigate } from "react-router-dom";
import "../style/Login.css";


const Login =()=>{

   const entrarMap = useNavigate();
   
   const loginItem = [
      {
         path:"/login",
         name:"Login",
      },
   ]
   
   return(
     <div className="body-login">
     <div className="wrapper">
    <form action="">
        <h1>Login</h1>
             <div className="input-box">
                <input name="email" type="email" placeholder="email" />
                <FaUser className="icon"/>
             </div>
             <div className="input-box">
                <input name="Password" type="password" placeholder="Password"/>
                <FaLock className="icon"/>
             </div>
             <div className="remember-forgot">
             <label><input type="checkbox" />Remember me</label>
             <a href="#">forgot password?</a>
             </div>

         <button onClick={()=>{
            entrarMap("/Mapa")
         }} >Entrar</button>

             <div className="register-link">
                <p>não esta registrado?<Link to="/registrar" className="link-regi" >Registrar</Link></p>
             </div>
    </form>
     </div>
     </div>
    )
}

export default Login;