import React from 'react';
import './CtnMain.css';

import panelprimerafila from '../img/panel-first-row.png';

import logoImg2 from '../img/Milogo.png';
import { Boton } from '../Components/Boton.jsx';


export function CtMain({ logo = logoImg2 }) {
    return (
        <>
            <section className="Contenedor-General">
                {/* PRIMERA FILA */}
                <div className="Row-first">
                    <section className="Cnt-row-first">
                        <div className="img-row-first">
                            <img src={panelprimerafila} alt="Panel Primera Fila" />
                        </div>
                        <h2 className="titulo-blanco">Energía Solar para un</h2>
                        <h2 className="titulo-azul">Futuro Sostenible</h2>

                        <div className='boton-contactanos'>
                            <Boton children="CONTACTANOS" className="bt-whatsap" />
                        </div>
                        <h2 className="titulo-colombia">COLOMBIA</h2>



                    </section>
                </div>

                {/* FIN DE PRIMERA FILA */}
                {/* INICIO SEGUNDA FILA */}
                <div className="Row-second">
                    <div className="Img-filatres"></div>
                </div>
                {/* FIN SEGUNDA FILA */}
                <div className="Row-third"></div>

                {/* INICIO CUARTA FILA */}
                <div className="Row-Fourth"></div>
            </section>
        </>
    );
}
