import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';


 export default function Navbar() {
    const [Sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!setSidebar);

    return(
        <IconContext.Provider value={{color:'#fff'}}> 
        <div className="menu-bars">
       <Link to='#' className="navbar">
        <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <nav className={Sidebar? 'nav-menu-active': 'nav-menu'}>
       <ul className="nav-menu-items" onClick={showSidebar}>
        <li className="navbar-togle">
            <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineClose/>
            </Link>
        </li>
        {SidebarData.map((item, index) => {
        return(
            <li key={index} className={item.cName}>
          <Link to={item.path} className="topath">
         {item.icon}
         <span>{item.tile}</span>
          </Link>
            </li>
        )
})}
       </ul>
        </nav>
        </div>
        </IconContext.Provider>
    )

}

