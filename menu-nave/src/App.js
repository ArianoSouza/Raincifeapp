import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import Reports from './pages/reports.js';
import Navbar from './components/Navbar.js';
import products from './pages/produtos.js';
import sidebarData from './components/SidebarData'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar>
    <Routes>
<Route path='/perfil' exact components={Home}/>
<Route path='/products' components={products}/>
<Route path='/products' components={Reports}/>
</Routes>
    </Navbar>
    </BrowserRouter>
    </>
  );
}

export default App;
