import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/layout/Home';
import Persona from './components/pages/Persona';
import Mascota from './components/pages/Mascota';
import ListaMascotas from './components/pages/ListaMascotas';
import ListaPersonas from './components/pages/ListaPersonas';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/persona' element={<Persona />} />
    <Route path='/mascota' element={<Mascota />} />
    <Route path='/lista-mascota' element={<ListaMascotas />} />
    <Route path='/lista-persona' element={<ListaPersonas />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
