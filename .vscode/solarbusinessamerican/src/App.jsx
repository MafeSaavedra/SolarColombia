import './App.css';
import './main.css';
import './Footer/Footer.css';
import { Navbar } from './Navbar/Navbar.jsx';
import { CtMain } from './Ctnmain/CtnMain.jsx';
import { Footer } from './Footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contactanos } from "./Pages/contactanos"; // Asegúrate de importar el componente

export function App() {
  return (
    <Router>
      <div className="Content-page">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            {/* Definir las rutas para que funcione el enrutamiento */}
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/" element={<CtMain />} />
            {/* Añadir más rutas según sea necesario */}
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
