import React, {Fragment, useEffect, useState} from 'react';

import Button from '../Button/Button';
import './Slider.css'

const Slider = () => {

    const [slide, setSlide] = useState(1)

    useEffect(() => {
        ((d) => {
            const $btnPrev = d.querySelector("#row-left"),
            $btnNext = d.querySelector("#row-right"),
            $dot_1 = d.querySelector("#dot-1"),
            $dot_2 = d.querySelector("#dot-2"),
            $dot_3 = d.querySelector("#dot-3"),
            $slide1 = d.querySelector(".slide-1"),
            $slide2 = d.querySelector(".slide-2"),
            $slide3 = d.querySelector(".slide-3");

            $btnNext.addEventListener("click", e=>{
                if(slide == 1){
                    setSlide(slide + 1)
                    $slide1.classList.toggle("none");
                    $slide2.classList.toggle("none");
                }
                console.log(slide)
                if(slide == 2){
                    setSlide(slide + 1)
                }
                if(slide == 3){
                    $slide2.classList.toggle("none");
                    $slide3.classList.toggle("none");
                }
                console.log(slide)

            });
        
           /*  d.addEventListener("click", e=>{
                if(!e.target.matches(".menu a"))return false;
        
                $btnMenu.firstElementChild.classList.remove("none");
                $btnMenu.lastElementChild.classList.add("none");
                $menu.classList.remove("is-active");
            }) */
        })(document);
    }, []);
       

    return ( 
        <section className="carousel">
            <input type="radio" name="slides" id="slide-1" defaultChecked/>
            <input type="radio" name="slides" id="slide-2"  />
            <input type="radio" name="slides" id="slide-3" />
            <div className="slides">
                <div className="slide-1">
                    <div className="slide-info">
                        <h2 className="main-title">
                            <span className="text-orange">JÓVENES </span><br/> <span className="text-white">QUE TRANSFORMAN</span>
                        </h2>
                        <p>Convocamos personas de <b>12 a 18 años</b> para co-construir una red a lo largo y ancho del país.</p>
                        <Button className="btn-white mb-18" text="SUMATE"/>
                    </div>
                    <div className="slide-img-mobile">
                        <img id="img-1" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-01.png"/>
                    </div>
                    <div className="slide-img-tablet">
                        <img id="img-1" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-01.png"/>
                    </div>
                    <div className="slide-img-desktop">
                        <img id="img-1" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-01.png"/>
                    </div>
                </div>
                <div className="slide-2 none">
                    <div className="slide-info">
                        <h2 className="main-title">
                        <span className="text-orange">SOBRAN UTOPÍAS </span><br/> <span className="text-white">FALTAN REALIDADES</span>
                        </h2>
                        <p>Queremos promover espacios de diálogo para que la juventud participe en la toma de decisiones. ¿Te animás?</p>
                        <Button className="btn-white mb-18" text="SUMATE"/>
                    </div>
                    <div className="slide-img-mobile">
                        <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-06.png"/>
                    </div>
                    <div className="slide-img-tablet">
                        <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-06.png"/>
                    </div>
                    <div className="slide-img-desktop">
                        <img src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-06.png"/>
                    </div>
                </div>
                <div className="slide-3 none">
                    <div className="slide-info">
                        <h2 className="main-title">
                        <span className="text-orange">NO COMUNES, </span><br/> <span className="text-white">SÍ BIEN COMÚN</span>
                        </h2>
                        <p>Vamos a conectar a Jóvenes transformadorxs que representen a la Argentina para inspirarnos y movilizarnos. ¿Empezamos hoy?</p>
                        <Button className="btn-white mb-18" text="SUMATE"/>
                    </div>
                    <div className="slide-img-mobile">
                        <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-07.png"/>
                    </div>
                    <div className="slide-img-tablet">
                        <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-07.png"/>
                    </div>
                    <div className="slide-img-desktop">
                        <img src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-07.png"/>
                    </div>
                </div> 
                <span id="row-left"><i class="fas fa-chevron-left"></i></span>
                <span id="row-right"><i class="fas fa-chevron-right"></i></span>    
            </div>
            <aside class="slides-nav">
                <label for="slide-1" id="dot-1"></label>
                <label for="slide-2" id="dot-2"></label>
                <label for="slide-3" id="dot-3"></label>
            </aside>  
              
        </section>
     );
}
 
export default Slider;