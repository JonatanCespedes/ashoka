import React, {useEffect} from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";

import './Fellows.css'

const Fellows = () => {

    useEffect(() => {
        Aos.init({duration: 3000}); 
    }, []);

    return ( 
        <section id="fellows" className="fellows-section">
            <h2 data-aos="fade" className="text-orange">
                FELLOWS <br/>
                CO-CREADORES
            </h2>
            <div className="fellows-container">
                <div data-aos="fade-up" className="fellow" id="fellow-1">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-Fellow-Mariana Incarnato.png"/>
                    <h6 className="text-orange">
                    MARIANA INCARNATO 
                    </h6>
                    <p id="title">Fundadora de Doncel.</p><p>Lucha por los derechos de los adolescentes y jóvenes sin cuidados parentales, en su transición a la vida adulta.</p>
                </div>
                <div data-aos="fade-down" className="fellow" id="fellow-2">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-Fellow-Alberto Croce.png"/>
                    <h6 className="text-orange">
                    ALBERTO CROCE 
                    </h6>
                    <p id="title">Director Ejecutivo de Fundación VOZ.</p><p>Trabaja para lograr que la escuela secundaria sea inclusiva, de calidad y responda a los desafíos de nuestra época.</p>
                </div>
                <div data-aos="fade-up" className="fellow" id="fellow-3">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-Fellow-Delfina Irazusta.png"/>
                    <h6 className="text-orange">
                    DELFINA IRAZUSTA 
                    </h6>
                    <p id="title">Fundadora y Directora de Red de Innovación Local.</p><p>Acompaña a equipos de gobiernos municipales mejorando sus capacidades de gestión, construyendo redes de colaboración y promoviendo políticas públicas innovadores.</p>
                </div>
                <div data-aos="fade-down" className="fellow" id="fellow-4">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-Fellow-Pierre-Yves-Herrquet.png"/>
                    <h6 className="text-orange">
                    PIERRE-YVES HEEROUET 
                    </h6>
                    <p id="title">Consultor y Director de Solar Inti.</p><p>Apunta a mejorar la economía familiar, la salud, la capacidad de subsistencia y al mismo tiempo, el medio ambiente.</p>
                </div>
            </div>
        </section>
     );
}
 
export default Fellows;