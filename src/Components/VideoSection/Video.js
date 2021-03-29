import React from 'react';

import Button from '../Button/Button'

import './Video.css'

const Video = () => {
    console.log(window.screen)
    return ( 
        <>
        <section id="acerca-m" className="video-section-mobile">
            <h3 data-aos="fade-left" className="video-title">
                <span className="text-white">DIGAMOS SÍ PARA</span><span className="text-blue"> CAMBIAR LO QUE NO</span>
            </h3>
            <hr data-aos="fade-left" data-aos-delay="400" className="video-line"/>
            <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JXxKAhsPOdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p data-aos="fade-left" data-aos-delay="600">
                Buscamos identificar y conectar Jóvenes Transformadorxs que representen a cada provincia de Argentina.
            </p>
            <div id="btn-video" dataAos="fade-left" dataAosDelay="600">
                <a  href="/Tribu 24 - Ashoka.pdf"  download="Ashoka" className="btn-white" >CONOCE MÁS</a>
            </div>
            
        </section>
        <section id="acerca-d" className="video-section-desktop">
            <div className="video-info">
                <h3 data-aos="fade-left" className="video-title">
                    <span className="text-white">DIGAMOS Sí PARA</span><span className="text-blue"> CAMBIAR LO QUE NO</span>
                </h3>
                <hr data-aos="fade-left" data-aos-delay="200" className="video-line"/>
                <p data-aos="fade-left" data-aos-delay="400">
                    Buscamos identificar y conectar Jóvenes Transformadorxs que representen a cada provincia de Argentina. 
                </p>
                <div id="btn-video" data-aos="fade-left" data-aos-delay="600">
                    <a  href="/Tribu 24 - Ashoka.pdf" download="Ashoka" className="btn-white" >CONOCE MÁS</a>
                </div>
                
            </div>
            <div   className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/JXxKAhsPOdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
        </>
     );
}
 
export default Video;