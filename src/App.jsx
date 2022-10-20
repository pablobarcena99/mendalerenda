import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// Fontawesoome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';

library.add(fab, fas);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
