 import React, { useState } from "react";
 import {FaBars, FaCloudSun, FaCommentAlt, FaMapMarkedAlt, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt} from "react-icons/fa";
 import {RiSaveFill} from "react-icons/ri";
 import {IoIosHelpCircle} from "react-icons/io";
 import {AiFillSetting} from "react-icons/ai"
import { NavLink } from "react-router-dom";
import logo2 from  "./Imgs/logo2.png";
import "../style/sidebar.css"

 
 
 const Sidebar = ({Children}) => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);

  const MenuItem=[
  {
    path:"/",
    name:"Mapa",
    icon:<FaMapMarkedAlt/>
    },
    {
      path:"/Perfil",
    name:"Perfil",
    icon:<FaUserAlt/>
    },
    {
      path:"/Salvos",
    name:"Salvos",
    icon:<RiSaveFill/>
    },
    {
      path:"/Clima",
    name:"Clima",
    icon:<FaCloudSun/>
    },
    {
      path:"/Ajuda",
    name:"Ajuda",
    icon:<IoIosHelpCircle/>
    },
    {
      path:"/Configuração",
    name:"Configuração",
    icon:<AiFillSetting/>
    },
]

  return(
    <div className="container">
      <div style={{width: isOpen ? "250px" : "50px" }}  className="sidebar">
        <div className="top_seletion">
         <img style={{display: isOpen ? "block" : "none" }}  className="logo" src={logo2} alt="logo app"></img>
         <div style={{marginLeft: isOpen ? "50px" : "0px" }}  className="bars">
          <FaBars onClick={toggle}/>
         </div>
         </div>
         {
          MenuItem.map((item, index) =>(
            <NavLink to={item.path} key={index} className="link" activeclasseName="active">
              <div className="icon">{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none" }}  className="link_text">{item.name}</div>
            </NavLink>
          ))
         }
      </div>
      <main>{Children}</main>
    </div>
)
 }

 export default Sidebar;