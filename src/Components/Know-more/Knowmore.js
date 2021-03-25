import React, {useEffect} from 'react';

import Button from '../Button/Button'
import './Knowmore.css';

const Knowmore = () => {

    return ( 
        <section id="ashoka" className="knowmore-section">
            <div data-aos="fade" className="knowmore__img">
                <img id="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-05.png"/>
                <img id="img-tablet" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-05.png"/>
                <img id="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-05.png"/>
            </div>
            <div className="knowmore__info">
                <h6  data-aos="fade-right" dataAosDelay="100" >
                    LA MAYORÍA DE LAS Y LOS EMPRENDEDORES SOCIALES DE <span className="text-cian">ASHOKA</span> HAN TENIDO SU PRIMERA EXPERIENCIA COMO AGENTES <span className="text-orange">DE CAMBIO</span> ANTES DE LOS 20 AÑOS.
                </h6>
                <Button  dataAos="fade-right" dataAosDelay="200" href="https://www.ashoka.org.ar/" id="orange" className="btn-orange" text="CONOCÉ MÁS"/>
            </div>
        </section>
     );
}
 
export default Knowmore;