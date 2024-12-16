import './Nosotros.css';
import panelnoche from '../img/panelsolar.png';
import compromiso from '../img/compromisow.png';
import responsabilidad from '../img/responsabilidad.png';
import Transparencia from '../img/trans_confi.png';

export function Nosotros() {
    return (
        <>
            <section className="cuerpo_page_we">
                <div>
                    <img className="heropanel" src={panelnoche} alt="Panel solar" />
                </div>
                <div className="texto_introductorio">
                    <h1>
                        Construimos un futuro más sostenible en Colombia. Como representantes de Universal Solar, ofrecemos soluciones solares innovadoras y eficientes para hogares, empresas y comunidades.
                    </h1>
                </div>
            </section>

            <section className="segundafila">
                <div className="mision_vision">
                    <div className="contenidovision">
                        <h1>Visión</h1>
                        <p>
                            Ser la empresa líder en soluciones de energía solar asequible en Colombia, impulsando la transición hacia un futuro sostenible, donde cada hogar y comunidad aproveche esta energía renovable para mejorar su calidad de vida y contribuir a la conservación del medio ambiente. Juntos, construimos un futuro más brillante.
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
            <section className='valoresempresariales'>
                <div className='cuadricula'>
                    <div className='compromsio'>
                        <div className='imagenvalor'>
                            <img src={compromiso} />

                        </div>
                        <div className='contenidodelvalor'>
                            <h1>
                                Compromiso
                            </h1>
                            <p>      Nos comprometemos con clientes, sociedad y planeta, liderando la transición hacia un futuro sostenible mediante soluciones solares innovadoras.
                            </p>
                        </div>

                    </div>
                    <div className='responsabilidad'>
                        <div>
                            <div className='imagen-responsa'>
                                <img className='responsa' src={responsabilidad} />

                            </div>                        </div>
                        <div className='contenidodelvalor'>
                            <h1>
                                Responsabilidad
                            </h1>
                            <p>                            Es nuestro compromiso operar de manera ética y responsable, contribuyendo al desarrollo social y económico de las comunidades en las que operamos
                            </p>
                        </div>

                    </div>
                    <div className='trans_confiana' >
                        <div>
                            <div className='imagenvalor'>
                                <img src={Transparencia} />

                            </div>                        </div>
                        <div className='contenidodelvalor'>
                            <h1>                            Transparencia y Confianza
                            </h1>
                            <p>
                                Valoramos la confianza, fomentando comunicación abierta y transparente para garantizar procesos y decisiones claros y accesibles a clientes y socios
                            </p>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}