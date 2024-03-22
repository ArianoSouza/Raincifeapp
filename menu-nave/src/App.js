import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Mapa from './pages/Mapa';
import Perfil from './pages/Perfil';
import Salvos from './pages/Salvos';
import Ajuda from './pages/Ajuda';
import Conf from './pages/Conf';
import Clima from './pages/Clima';

function App() {
  return (
     <BrowserRouter>
    <Sidebar/>
     <Routes>
      <Route path="/" element={<Mapa/>}/>
      <Route path="/Mapa" element={<Mapa/>}/>
      <Route path="/Perfil" element={<Perfil/>}/>
      <Route path="/Clima" element={<Clima/>}/>
      <Route path="/Salvos" element={<Salvos/>}/>
      <Route path="/Ajuda" element={<Ajuda/>}/>
      <Route path="/Configuração" element={<Conf/>}/>
     </Routes>
     </BrowserRouter>
  );
};

export default App;
