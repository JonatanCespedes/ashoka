import React, {Fragment} from 'react';

import Button from '../Button/Button';
import './Slider.css'

const Slider = () => {
    return ( 
        <section className="carousel">
            <input type="radio" name="slides" id="slide-1" checked/>
            <input type="radio" name="slides" id="slide-2" checked/>
            <input type="radio" name="slides" id="slide-3" checked/>
            <ul className="slides">
                <li className="slide">
                    <h2 className="main-title">
                        <span className="text-orange">JÓVENES </span><br/> <span className="text-white">QUE TRANSFORMAN</span>
                    </h2>
                    <p>Convocamos personas de <b>12 a 18 años</b> para co-construir una red a lo largo y ancho del país.</p>
                    <Button className="btn-white mb-18" text="SUMATE"/>
                    <div className="slide-img">
                        <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-01.png"/>
                    </div>
                </li>
                <li className="slide">
                    <h2 className="main-title">
                        JÓVENES <br/> QUE TRANSFORMAN
                    </h2>
                    <p>Convocamos personas de <b>12 a 18 años</b> para co-construir una red a lo largo y ancho del país.</p>
                    <Button className="btn-white mb-18" text="SUMATE"/>
                    <div className="slide-img">
                        <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-01.png"/>
                    </div>
                </li>
                <li className="slide">
                    <h2 className="main-title">
                        JÓVENES <br/> QUE TRANSFORMAN
                    </h2>
                    <p>Convocamos personas de <b>12 a 18 años</b> para co-construir una red a lo largo y ancho del país.</p>
                    <Button className="btn-white mb-18" text="SUMATE"/>
                    <div className="slide-img">
                        <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-01.png"/>
                    </div>
                </li>
               
            </ul>
            <aside class="slides-nav">
                <label for="slide-1" id="dot-1" defaultChecked></label>
                <label for="slide-2" id="dot-2"></label>
                <label for="slide-3" id="dot-3"></label>
            </aside>
            
        </section>
     );
}
 
export default Slider;