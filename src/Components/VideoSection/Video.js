import React from 'react';

import Button from '../Button/Button';
import './Video.css'

const Video = () => {
    return ( 
        <>
        <section className="video-section-mobile">
            <h3 className="video-title">
                <span className="text-white">DIGAMOS SI PARA</span><span className="text-blue"> CAMBIAR LO QUE NO</span>
            </h3>
            <hr className="video-line"/>
            <div className="video-container">
                <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-02.png"/>
            </div>
            <p>
                Buscamos identificar y conectar jóvenes transformadorxs que representen a cada rincón de Argentina. Si querés conocer más sobre Tribu 24
            </p>
            <Button className="btn-white mb-30 align-center" text="HACÉ CLICK ACÁ"/>
        </section>
        <section className="video-section-desktop">
            <div className="video-info">
                <h3 className="video-title">
                    <span className="text-white">DIGAMOS SI PARA</span><span className="text-blue"> CAMBIAR LO QUE NO</span>
                </h3>
                <hr className="video-line"/>
                <p>
                    Buscamos identificar y conectar jóvenes transformadorxs que representen a cada rincón de Argentina. Si querés conocer más sobre Tribu 24
                </p>
                <Button className="btn-white mb-30 align-center" text="HACÉ CLICK ACÁ"/>
            </div>
            <div className="video-container">
                <img src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-02.png"/>
            </div>
        </section>
        </>
     );
}
 
export default Video;