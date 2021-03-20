import React from 'react';

import './Fellows.css'

const Fellows = () => {
    return ( 
        <section className="fellows-section">
            <h2 className="text-orange">
                FELLOWS <br/>
                CO-CREADORES
            </h2>
            <div className="fellows-container">
                <div className="fellow">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-Fellow-Mariana Incarnato.png"/>
                    <h6 className="text-orange">
                    MARIANA INCARNATO 
                    </h6>
                    <p><b>Fundadora de Doncel.<br/></b>Lucha por los derechos de los adolescentes y jóvenes sin cuidados parentales, en su transición a la vida adulta.</p>
                </div>
                <div className="fellow">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-Fellow-Alberto Croce.png"/>
                    <h6 className="text-orange">
                    ALBERTO CROCE 
                    </h6>
                    <p><b>Director Ejecutivo de Fundación VOZ.<br/></b>Trabaja para lograr que la escuela secundaria sea inclusiva, de calidad y responda a los desafíos de nuestra época.</p>
                </div>
                <div className="fellow">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-Fellow-Delfina Irazusta.png"/>
                    <h6 className="text-orange">
                    DELFINA IRAZUSTA 
                    </h6>
                    <p><b>Fundadora y Direectora de Red de Innovación Local.<br/></b>Acompaña a equipos de gobiernos municipales mejorando sus capacidades de gestión, construyendo redes de colaboración y promoviendo políticas públicas innovadores.</p>
                </div>
                <div className="fellow">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-Fellow-Pierre-Yves-Herrquet.png"/>
                    <h6 className="text-orange">
                    PIERRE-YVES HEEROUET 
                    </h6>
                    <p><b>Consultor y Director de Solar Inti.<br/></b>Apunta a mejorar la economía familiar, la salud, la capacidad de subsistencia y al mismo tiempo, el medio ambiente.</p>
                </div>
            </div>
            
        </section>

     );
}
 
export default Fellows;