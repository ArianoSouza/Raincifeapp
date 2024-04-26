import React from "react";
import Sidebar from "../components/Sidebar";
import "../style/Perfil.css";
import "../style/clima.css";
import { FaCloud, FaCloudSun, FaCloudShowersHeavy, FaCloudSunRain} from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";


const Clima = () => {
return(
   <div>
   <div className="imagens">
      <div className="body_cad">
        <h3>Clima atual</h3>
        <p>18:30</p>
        <h1 className="text"><FaCloudSun/>29°C</h1>
        <h2>Sensação termica: 35°C</h2>
        <p>O céu estará parcialmente nuvem</p>

<div  className="mine_card">
<div className="mine_card_cli">
         <h3>Sext.26</h3>
        <FaCloudSun className="icon"/>
        <p>29°C</p>
        </div>
        <div className="mine_card_cli">
         <h3>Sab.27</h3>
        <FaCloudSun className="icon"/>
        <p>31°C</p>
        </div>
        <div className="mine_card_cli">
         <h3>Domin.28</h3>
        <FaSun className="icon"/>
        <p>30°C</p>
        </div>
        <div className="mine_card_cli">
         <h3>Seg.29</h3>
        <FaCloudShowersHeavy className="icon"/>
        <p>31°C</p>
        </div>
        <div className="mine_card_cli">
         <h3>Ter.30</h3>
        <FaCloud className="icon"/>
        <p>31°C</p>
        </div>
        </div>
        </div>
         </div>
         </div>
)
}

export default Clima;