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
                    <img alt="Foto Mariana Incarnato" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-Fellow-Mariana Incarnato.png"/>
                    <h6 className="text-orange">
                    MARIANA INCARNATO 
                    </h6>
                    <p id="title">Fundadora de <a href="https://doncel.org.ar/" target="_blank" rel="noreferrer">Doncel</a>.</p><p>Lucha por los derechos de los adolescentes y jóvenes sin cuidados parentales, en su transición a la vida adulta.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" className="fellow" id="fellow-2">
                    <img alt="Foto Alberto Croce" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-Fellow-Alberto Croce .png"/>
                    <h6 className="text-orange">
                    ALBERTO CROCE 
                    </h6>
                    <p id="title">Director Ejecutivo de <a href="https://www.transformarlasecundaria.org/fundacion-voz/" rel="noreferrer" target="_blank">Fundación VOZ</a>.</p><p>Trabaja para lograr que la escuela secundaria sea inclusiva, de calidad y responda a los desafíos de nuestra época.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="600" className="fellow" id="fellow-3">
                    <img alt="Foto" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-Fellow-Delfina Irazusta.png"/>
                    <h6 className="text-orange">
                    DELFINA IRAZUSTA 
                    </h6>
                    <p id="title">Fundadora y Directora de <a href="https://www.redinnovacionlocal.org/" rel="noreferrer" target="_blank">Red de Innovación Local</a>.</p><p>Acompaña a equipos de gobiernos municipales mejorando sus capacidades de gestión, construyendo redes de colaboración y promoviendo políticas públicas innovadores.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="800" className="fellow" id="fellow-4">
                    <img alt="Foto Pierre Yves herrquet" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-Fellow-Pierre-Yves-Herrquet.png"/>
                    <h6 className="text-orange">
                    PIERRE-YVES HERROUET 
                    </h6>
                    <p id="title">Fundador de <a href="https://www.facebook.com/SolarInti/" target="_blank" rel="noreferrer">Solar Inti</a>, Dir. de Desarrollo Socio Económico / Ministerio de Desarrollo Social de Salta. </p><p> Apunta a desarrollar el emprendedurismo de triple impacto, favoreciendo la inclusión social, regenerando el ambiente, y fortaleciendo las economías locales.</p>
                </div>
            </div>
        </section>
     );
}
 
export default Fellows;