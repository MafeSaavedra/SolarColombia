import './Nosotros.css';
import panelnoche from '../img/panelsolar.jpg';

export function Nosotros() {
    return (
        <>
            <section className="cuerpo_page_we">
                <div>
                    <img src={panelnoche} alt="Panel solar" />
                </div>
                <div className="texto_introductorio">
                    <h1>
                        En Solar Business American, creemos en un futuro más limpio y sostenible, impulsado por la energía solar.
                    </h1>
                </div>
            </section>

            <section className="segundafila">
                <div className="mision_vision">
                    <div className="contenidovision">
                        <h1>Visión</h1>
                        <p>
                            En Solar Business American, nuestra visión es liderar la transición hacia un futuro energético sostenible, brindando soluciones solares innovadoras y accesibles que mejoren la vida de las personas y protejan el medio ambiente. Nos comprometemos a ser una empresa pionera en la distribución de paneles solares de alta calidad, impulsando el uso de energías renovables y contribuyendo al bienestar de las comunidades y al cuidado del planeta para las futuras generaciones.
                        </p>
                    </div>
                    <div className="contenidovision">
                        <h1>Misión</h1>
                        <p>
                            Nuestra misión es proporcionar energía solar de calidad internacional, adaptada a las necesidades locales, para garantizar un futuro sostenible y accesible para todos. Trabajamos con pasión para fomentar un cambio positivo, reduciendo la huella ambiental y promoviendo un uso eficiente de recursos.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
