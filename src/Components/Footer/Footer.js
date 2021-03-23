import React from 'react';

import './Footer.css';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="logos">
                <div className="logos__mobile">
                    <img id="logo-1" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Ashoka-Footer.png"/>
                    <img id="logo-2" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Tribu24-Footer.png"/>
                </div>

                <div className="logos__tablet">
                    <img id="logo-1" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Ashoka-Footer.png"/>
                    <img id="logo-2" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Tribu24-Footer.png"/>
                </div>

                <div className="logos__desktop">
                    <img id="logo-1" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Ashoka-Footer.png"/>
                    <img id="logo-2" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Tribu24-Footer.png"/>
                </div>
                
            </div>
        </footer>
     );
}
 
export default Footer;
