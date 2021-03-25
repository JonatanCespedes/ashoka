import React, {useEffect} from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";

const MainT = () => {

    useEffect(() => {
        Aos.init({duration: 400}); 
    }, []);

    return ( 
        <h2 data-aos="fade-up" className="main-title">
            <span className="text-orange">JÓVENES </span><br/> <span className="text-white">QUE TRANSFORMAN</span>
        </h2>
     );
}
 
export default MainT;