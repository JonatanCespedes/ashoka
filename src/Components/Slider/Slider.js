import React, {Fragment, useEffect, useState} from 'react';

import Button from '../Button/Button';
import './Slider.css'

const Slider = () => {

    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const sliderAnimation = () => setTimeout(()=>{
            return setSlide(slide + 1)
        }, 10000)
        sliderAnimation()
    }, []);
    
    useEffect(() => {
        ((d) => {
            const $btnPrev = d.querySelector("#row-left"),
            $btnNext = d.querySelector("#row-right"),
            $dot_1 = d.querySelector("#slide-1"),
            $dot_2 = d.querySelector("#slide-2"),
            $dot_3 = d.querySelector("#slide-3"),
            $slide1 = d.querySelector(".slide-1"),
            $slide2 = d.querySelector(".slide-2"),
            $slide3 = d.querySelector(".slide-3");

            

            switch (slide) {
                case -1:
                    setSlide(2)
                case 0: 
                    $slide1.classList.remove('none');
                    $slide2.classList.add('none');
                    $slide3.classList.add('none');
                    $dot_1.checked = true;
                    $dot_2.checked = false;
                    $dot_3.checked = false;
                    break;
                case 1:
                    $slide1.classList.add('none');
                    $slide2.classList.remove('none');
                    $slide3.classList.add('none');
                    $dot_1.checked = false;
                    $dot_2.checked = true;
                    $dot_3.checked = false;
                    break;
                case 2:
                    $slide1.classList.add('none');
                    $slide2.classList.add('none');
                    $slide3.classList.remove('none');
                    $dot_1.checked = false;
                    $dot_2.checked = false;
                    $dot_3.checked = true;
                    break;
                case 3:
                    setSlide(0)
                    $slide3.classList.add('none');
                    $slide1.classList.remove('none')
                default:
                    break;
            }
        })(document);
    }, [slide]);

    /* e.target.classList.add('fade-out'); */
       

    return ( 
        <section className="carousel">
            <input type="radio" name="slides" id="slide-1" defaultChecked/>
            <input type="radio" name="slides" id="slide-2"  />
            <input type="radio" name="slides" id="slide-3" />
            <div className="slides">
                <div className="slide-1 fade-in ">
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
                <div className="slide-2 none fade-in">
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
                <div className="slide-3 none fade-in">
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
                <span id="row-left"  onClick={()=>setSlide(slide - 1)}><i  className="fas fa-chevron-left"></i></span>
                <span id="row-right" onClick={()=>setSlide(slide + 1)}><i className="fas fa-chevron-right"></i></span>    
            </div>
            <aside class="slides-nav">
                <label htmlFor="slide-1" id="dot-1" onClick={()=>setSlide(0)}></label>
                <label htmlFor="slide-2" id="dot-2" onClick={()=>setSlide(1)}></label>
                <label htmlFor="slide-3" id="dot-3" onClick={()=>setSlide(2)}></label>
            </aside>  
              
        </section>
     );
}
 
export default Slider;