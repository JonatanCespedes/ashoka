import React from 'react';

import './Allies.css';

const Allies = () => {
    return ( 
        <section className="allies-section">
            <h2 className="text-orange">NUESTROS ALIADOS</h2>
            <div className="allies-container">
                <div className="row-1">
                    <div>
                        <small>CO-CREADO CON</small>
                        <hr/>
                    </div>
                    <div>
                        <small id="impulsado">IMPULSADO JUNTO A</small>
                        <hr/>
                    </div>
                </div>
                <div className="row-2">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Motorola.png"/>
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Natura.png"/>
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Oracle.png"/>
                </div>
                <div className="row-3">
                    <div>
                        <small>COLABORA</small>
                        <hr/>
                    </div>
                    <div>
                        <small>ACOMPAÑA</small>
                        <hr/>
                    </div>
                </div>   
                <div className="row-4">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-FundacionBancoCiudad.png"/>
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-FundacionLaNacion.png"/>
                </div>
                
            </div>
        </section>
     );
}
 
export default Allies;