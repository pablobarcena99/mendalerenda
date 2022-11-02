import "./App.scss";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// Fontawesoome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import ScrollToTop from "./components/ScrollToTop";
import Eventos from "./pages/Eventos";

library.add(fab, fas);

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route index element={<Main />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
