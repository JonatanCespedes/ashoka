import React from 'react';

import Button from '../Button/Button'

import './Video.css'

const Video = () => {

    return ( 
        <>
        <section id="acerca-m" className="video-section-mobile">
            <h3 data-aos="fade-left" className="video-title">
                <span className="text-white">DIGAMOS SI PARA</span><span className="text-blue"> CAMBIAR LO QUE NO</span>
            </h3>
            <hr data-aos="fade-left" data-aos-delay="400" className="video-line"/>
            <div className="video-container">
            <iframe width="280" height="280" src="https://www.youtube.com/embed/2auIuJw71-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p data-aos="fade-left" data-aos-delay="600">
                Buscamos identificar y conectar jóvenes transformadorxs que representen a cada rincón de Argentina.
            </p>
            <Button dataAos="fade-left" dataAosDelay="600" className="btn-white" text="CONOCE MÁS"  />
        </section>
        <section id="acerca-d" className="video-section-desktop">
            <div className="video-info">
                <h3 data-aos="fade-left" className="video-title">
                    <span className="text-white">DIGAMOS SI PARA</span><span className="text-blue"> CAMBIAR LO QUE NO</span>
                </h3>
                <hr data-aos="fade-left" data-aos-delay="200" className="video-line"/>
                <p data-aos="fade-left" data-aos-delay="400">
                    Buscamos identificar y conectar jóvenes transformadorxs que representen a cada rincón de Argentina. 
                </p>
                <Button dataAos="fade-left" dataAosDelay="600" className="btn-white" text="CONOCE MÁS"  />
            </div>
            <div  className="video-container">
            <iframe width="280" height="280" src="https://www.youtube.com/embed/2auIuJw71-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
        </>
     );
}
 
export default Video;