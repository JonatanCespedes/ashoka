import React from 'react';

import './Photo.css';

const Photo = () => {

    return ( 
        <section className="photo-section">
            <div className="photo-section-container">
                <img alt="Foto" data-aos="fade" id="mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-04.png"/>
                <img alt="Foto" data-aos="fade" id="tablet" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-04.png"/>
                <img alt="Foto" data-aos="fade" id="desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-04.png"/>
            </div>
        </section>
     );
}
 
export default Photo;