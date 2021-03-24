import React, {useEffect} from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";

import './Allies.css';

const Allies = () => {

    useEffect(() => {
        Aos.init({duration: 3000}); 
    }, []);

    return ( 
        <section className="allies-section">
            <h2 data-aos="fade" className="text-orange">NUESTROS ALIADOS</h2>
            <div className="allies-container">
                <div className="allies__box1">
                    <div className="row-1">
                        <div data-aos="slide-right" className="allies__title">
                            <small>CO-CREADO CON</small>
                            <hr/>
                        </div>
                        <div data-aos="slide-left" className="allies__title">
                            <small id="impulsado">IMPULSADO JUNTO A</small>
                            <hr/>
                        </div>
                    </div>
                    <div data-aos="fade" className="row-2">
                        {/* Mobile images */}
                        <img className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Motorola.png"/>
                        <img className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Natura.png"/>
                        <img className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Oracle.png"/>
                        {/* Desktop images */}
                        <img className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Motorola.png"/>
                        <img className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Natura.png"/>
                        <img className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Oracle.png"/>
                    </div>
                </div>
                <div className="allies__box2">
                    <div className="row-3">
                        <div data-aos="slide-right" className="allies__title">
                            <small>COLABORA</small>
                            <hr/>
                        </div>
                        <div data-aos="slide-left" className="allies__title">
                            <small>ACOMPAÑA</small>
                            <hr/>
                        </div>
                    </div>   
                    <div data-aos="fade" className="row-4">
                        {/* Mobile images */}
                        <img className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-FundacionBancoCiudad.png"/>
                        <img className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-FundacionLaNacion.png"/>
                        {/* Desktop images */}
                        <img className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-FundacionBancoCiudad.png"/>
                        <img className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-FundacionLaNacion.png"/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Allies;