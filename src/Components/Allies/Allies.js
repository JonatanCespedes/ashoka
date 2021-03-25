import React from 'react';

import './Allies.css';

const Allies = () => {

    return ( 
        <section className="allies-section">
            <h2 data-aos="fade" className="text-orange">NUESTROS ALIADOS</h2>
            <div className="allies-container">
                <div className="allies__box1">
                    <div className="row-1">
                        <div data-aos="fade-up" data-aos-delay="200" className="allies__title">
                            <small>CO-CREADO CON</small>
                            <hr/>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className="allies__title">
                            <small id="impulsado">IMPULSADO JUNTO A</small>
                            <hr/>
                        </div>
                    </div>
                    <div className="row-2">
                        {/* Mobile images */}
                        <img data-aos="fade-up" data-aos-delay="1000" className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Motorola.png"/>
                        <img data-aos="fade-up" data-aos-delay="1200" className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Natura.png"/>
                        <img data-aos="fade-up" data-aos-delay="1400" className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Oracle.png"/>
                        {/* Desktop images */}
                        <img data-aos="fade-up" data-aos-delay="1000" className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Motorola.png"/>
                        <img data-aos="fade-up" data-aos-delay="1200" className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Natura.png"/>
                        <img data-aos="fade-up" data-aos-delay="1400" className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Oracle.png"/>
                    </div>
                </div>
                <div className="allies__box2">
                    <div className="row-3">
                        <div data-aos="fade-up" data-aos-delay="600" className="allies__title">
                            <small>COLABORA</small>
                            <hr/>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="800" className="allies__title">
                            <small>ACOMPAÑA</small>
                            <hr/>
                        </div>
                    </div>   
                    <div className="row-4">
                        {/* Mobile images */}
                        <img data-aos="fade-up" data-aos-delay="1600" className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-FundacionBancoCiudad.png"/>
                        <img data-aos="fade-up" data-aos-delay="1800" className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-FundacionLaNacion.png"/>
                        {/* Desktop images */}
                        <img data-aos="fade-up" data-aos-delay="1600" className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-FundacionBancoCiudad.png"/>
                        <img data-aos="fade-up" data-aos-delay="1800" className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-FundacionLaNacion.png"/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Allies;