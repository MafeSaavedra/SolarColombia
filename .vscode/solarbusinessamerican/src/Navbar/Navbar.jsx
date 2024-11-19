import { useState } from "react";
import './Navbar.css';
import logoImg from '../img/Milogo.png';
import { Link } from 'react-router-dom';
import { Boton } from '../Components/Boton.jsx';

export function Navbar({ logo = logoImg }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => { setIsOpen(!isOpen); };

    return (
        <div className="Nav-back">
            <div className="ctn">
                <div className={`navbar-links ${isOpen ? "active" : ""}`} >
                    <div id="ctn-links">
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/contactanos">Productos</Link></li>
                            <li><Link to="#contact">Sobre Nosotros</Link></li>
                            <li><Link to="#lotes">Proceso</Link></li>
                            <li><Link to="#ubicacion">Ubicación</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="boton-wh" id="boton-whatsap">
                    <Boton children="+57 3016826992" className="bt-whatsap" />
                </div>

                <div className="ctn-logo" id="ctn-logo">
                    <img className="logohome" src={logo} alt="Logo" />
                </div>


                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>


            </div>
        </div>
    );
}
