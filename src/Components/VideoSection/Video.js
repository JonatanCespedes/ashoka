import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import "aos/dist/aos.css"

import Button from '../Button/Button';
import './Video.css'

const Video = () => {
    useEffect(() => {
        Aos.init({duration: 2000}); 
    }, []);

    return ( 
        <>
        <section id="acerca-m" className="video-section-mobile">
            <h3 data-aos="fade-left" className="video-title">
                <span className="text-white">DIGAMOS SI PARA</span><span className="text-blue"> CAMBIAR LO QUE NO</span>
            </h3>
            <hr className="video-line"/>
            <div className="video-container">
                <img data-aos="zoom-in" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-02.png"/>
            </div>
            <p data-aos="fade-right">
                Buscamos identificar y conectar jóvenes transformadorxs que representen a cada rincón de Argentina. Si querés conocer más sobre Tribu 24
            </p>
            <Button className="btn-white mb-30 align-center" text="HACÉ CLICK ACÁ"/>
        </section>
        <section id="acerca-d" className="video-section-desktop">
            <div data-aos="fade-up" className="video-info">
                <h3 className="video-title">
                    <span className="text-white">DIGAMOS SI PARA</span><span className="text-blue"> CAMBIAR LO QUE NO</span>
                </h3>
                <hr className="video-line"/>
                <p>
                    Buscamos identificar y conectar jóvenes transformadorxs que representen a cada rincón de Argentina. Si querés conocer más sobre Tribu 24
                </p>
                <Button data-aos="flip-up" className="btn-white mb-30 align-center" text="HACÉ CLICK ACÁ"/>
            </div>
            <div data-aos="fade-left" className="video-container">
                <img src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-02.png"/>
            </div>
        </section>
        </>
     );
}
 
export default Video;