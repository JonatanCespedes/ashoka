import React, {useEffect} from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";

const PSlide = () => {

    useEffect(() => {
        Aos.init({duration: 400}); 
    }, []);

    return ( 
        <p data-aos="fade-up" data-aos-delay="400">Convocamos personas de <b>12 a 18 años</b> para co-construir una red a lo largo y ancho del país.</p>
     );
}
 
export default PSlide;