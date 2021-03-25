import React, {useEffect} from 'react';

import Aos from 'aos';

import './Button.css'

const Button = (props) => {

    useEffect(() => {
        Aos.init({duration: 400}); 
    }, []);

    return ( 
        <div data-aos={props.dataAos} data-aos-delay={props.dataAosDelay} className={props.className}>
            <a href={props.href} target="_blank"  >
                {props.text}
            </a>
        </div>
       
     );
}
 
export default Button;