import React, {useEffect} from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";

import './Photo.css';

const Photo = () => {

    useEffect(() => {
        Aos.init({duration: 2000}); 
    }, []);

    return ( 
        <section className="photo-section">
            <div className="photo-section-container">
                <img data-aos="fade" id="mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-04.png"/>
                <img data-aos="fade" id="tablet" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-04.png"/>
                <img data-aos="fade" id="desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Imagen-04.png"/>
            </div>
        </section>
     );
}
 
export default Photo;