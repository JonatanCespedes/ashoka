import React, {Fragment, useEffect} from 'react';

import Button from '../Button/Button';
import './Slider.css'

const Slider = () => {

       

    return ( 
        <section className="carousel">
            <input type="radio" name="slides" id="slide-1" defaultChecked/>
            <input type="radio" name="slides" id="slide-2"  />
            <input type="radio" name="slides" id="slide-3" />
            <ul className="slides">
                <li className="slide">
                    <h2 className="main-title">
                        <span className="text-orange">JÓVENES </span><br/> <span className="text-white">QUE TRANSFORMAN</span>
                    </h2>
                    <p>Convocamos personas de <b>12 a 18 años</b> para co-construir una red a lo largo y ancho del país.</p>
                    <Button className="btn-white mb-18" text="SUMATE"/>
                    <div className="slide-img">
                        <img id="img-1" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-01.png"/>
                    </div>
                </li>
                <li className="slide">
                    <h2 className="main-title">
                    <span className="text-orange">SOBRAN UTOPÍAS </span><br/> <span className="text-white">FALTAN REALIDADES</span>
                    </h2>
                    <p>Queremos promover espacios de diálogo para que la juventud participe en la toma de decisiones. ¿Te animás?</p>
                    <Button className="btn-white mb-18" text="SUMATE"/>
                    <div className="slide-img">
                        <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-06.png"/>
                    </div>
                </li>
                <li className="slide">
                    <h2 className="main-title">
                    <span className="text-orange">NO COMUNES, </span><br/> <span className="text-white">SÍ BIEN COMÚN</span>
                    </h2>
                    <p>Vamos a conectar a Jóvenes transformadorxs que representen a la Argentina para inspirarnos y movilizarnos. ¿Empezamos hoy?</p>
                    <Button className="btn-white mb-18" text="SUMATE"/>
                    <div className="slide-img">
                        <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-07.png"/>
                    </div>
                </li>   
            </ul>
            <aside class="slides-nav">
                <label for="slide-1" id="dot-1"></label>
                <label for="slide-2" id="dot-2"></label>
                <label for="slide-3" id="dot-3"></label>
            </aside>    
        </section>
     );
}
 
export default Slider;