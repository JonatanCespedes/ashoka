import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import './Way.css';

const Way = () => {

    useEffect(() => {
        Aos.init({duration: 2000}); 
    }, []);

    return ( 
        <section id="camino" className="way-section"> 
            <div className="way-info">
                <h3 data-aos="fade" className="text-orange">
                EL CAMINO A RECORRER
                </h3>
                <div data-aos="fade-left" className="way-sentences s-1">
                    <p> 
                        <svg className="svg-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 20">
                            <title>Ashoka-Landing-Mobile</title>
                            <g id="extras">
                                <polygon class="cls-1" points="10.89 10.02 4.25 3.35 4.25 3.39 4.25 16.7 10.89 10.02"/>
                            </g>
                        </svg>  
                    Contruirán una <b>identidad</b> como agentes de cambio.    
                    </p>
                </div>
                <div data-aos="fade-right" className="way-sentences s-2">
                    <p>
                        <svg className="svg-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 20">
                            <title>Ashoka-Landing-Mobile</title>
                            <g id="extras">
                                <polygon class="cls-1" points="10.64 10.16 4 3.48 4 3.52 4 16.83 10.64 10.16"/>
                            </g>
                        </svg>
                    Facilitar la colaboración y el trabajo en <b>equipo</b>.
                    </p>
                </div>   
                <div data-aos="fade-left" className="way-sentences s-3">
                    <p>
                        <svg className="svg-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 20">
                            <title>Ashoka-Landing-Mobile</title>
                            <g id="extras">
                                <polygon class="cls-1" points="10.89 10.02 4.25 3.35 4.25 3.39 4.25 16.7 10.89 10.02"/>
                            </g>
                        </svg>     
                    Pariciparán de un programa de desarrollo de habilidades de liderazgo certificado por <b>Ashoka</b> Argentina.    
                    </p>
                </div>    
                <div data-aos="fade-right" className="way-sentences s-4">
                    <p>
                        <svg className="svg-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 20">
                            
                            <title>Ashoka-Landing-Mobile</title>
                            <g id="extras">
                                <polygon class="cls-1" points="10.64 10.16 4 3.48 4 3.52 4 16.83 10.64 10.16"/>
                            </g>
                        </svg> 
                    <b>Co-crearán</b> comunidades junto a escuelas, organizaciones y empresas locales, gobiernos, entre otros.
                    </p>
                </div>        
            </div>
            <div data-aos="fade" className="img-container-mobile">
                <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-03.png"/>
            </div>
            <div data-aos="fade" className="img-container-tablet">
                <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-03.png"/>
            </div>
            <div data-aos="fade" className="img-container-desktop">
                <img src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-03.png"/>
            </div>

        </section> 
     );
}
 
export default Way;