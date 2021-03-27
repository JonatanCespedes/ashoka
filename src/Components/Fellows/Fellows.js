import React from 'react';

import './Fellows.css'

const Fellows = () => {

    return ( 
        <section id="fellows" className="fellows-section">
            <h2 data-aos="fade" className="text-orange">
                FELLOWS <br/>
                CO-CREADORES
            </h2>
            <div className="fellows-container">
                <div data-aos="fade-up" data-aos-delay="200" className="fellow" id="fellow-1">
                    <img src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-Fellow-Mariana Incarnato.png"/>
                    <h6 className="text-orange">
                    MARIANA INCARNATO 
                    </h6>
                    <p id="title">Fundadora de <a href="https://doncel.org.ar/" target="_blank">Doncel</a>.</p><p>Lucha por los derechos de los adolescentes y jóvenes sin cuidados parentales, en su transición a la vida adulta.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" className="fellow" id="fellow-2">
                    <img src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-Fellow-Alberto Croce .png"/>
                    <h6 className="text-orange">
                    ALBERTO CROCE 
                    </h6>
                    <p id="title">Director Ejecutivo de <a href="https://www.transformarlasecundaria.org/fundacion-voz/" target="_blank">Fundación VOZ</a>.</p><p>Trabaja para lograr que la escuela secundaria sea inclusiva, de calidad y responda a los desafíos de nuestra época.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="600" className="fellow" id="fellow-3">
                    <img src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-Fellow-Delfina Irazusta.png"/>
                    <h6 className="text-orange">
                    DELFINA IRAZUSTA 
                    </h6>
                    <p id="title">Fundadora y Directora de <a href="https://www.redinnovacionlocal.org/" target="_blank">Red de Innovación Local</a>.</p><p>Acompaña a equipos de gobiernos municipales mejorando sus capacidades de gestión, construyendo redes de colaboración y promoviendo políticas públicas innovadores.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="800" className="fellow" id="fellow-4">
                    <img src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-Fellow-Pierre-Yves-Herrquet.png"/>
                    <h6 className="text-orange">
                    PIERRE-YVES HEEROUET 
                    </h6>
                    <p id="title">Consultor y Director de <a href="https://www.facebook.com/SolarInti/" target="_blank">Solar Inti</a>.</p><p>Apunta a mejorar la economía familiar, la salud, la capacidad de subsistencia y al mismo tiempo, el medio ambiente.</p>
                </div>
            </div>
        </section>
     );
}
 
export default Fellows;