import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const sidebarData = [
    {
title : 'perfil',
path : "/Home",
icon :<AiIcons.AiFillHome/>,
 cName :'nav-text'
    },

    {
title :'produtos',
 path :"/products",
 icon :<IoIcons.IoIosPaper/>,
 cName :'nav-text'
    },

    {
title : 'Reports',
path :"/products",
 icon :<FaIcons.FaCartPlus/>,
 cName :'nav-text'
    },

]

export default sidebarData;
