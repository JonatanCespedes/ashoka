import React from 'react';
import Button from '../Button/Button'
import './Knowmore.css';

const Knowmore = () => {
    return ( 
        <section className="knowmore-section">
            <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-05.png"/>
            <h6>
                LA MAYORÍA DE LOS EMPRENDEDORES SOCIALES DE <span className="text-cian">ASHOKA</span> HAN TENIDO SU PRIMERA EXPERIENCIA COMO AGENTES <span className="text-orange">DE CAMBIO</span> ANTES DE LOS 20 AÑOS.
            </h6>
            <Button className="btn-orange" text="CONOCÉ MÁS"/>
        </section>
     );
}
 
export default Knowmore;