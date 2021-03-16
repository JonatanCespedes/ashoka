import React from 'react';
import './Header.css';

const Header = () => {
    return ( 
        <header className="header">
            <section className="container">
                <div className="logos">
                    <img id="logo-1" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Ashoka-Footer.png"/>
                    <img id="logo-2" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Tribu24-Footer.png"/>
                </div>
                <button className="btn-menu">
                   <img src="images/mobile/SVG/Ashoka-Landing-Mobile_Icono-01.svg" />
                </button>
                <nav className="menu">

                </nav>
            </section>
        </header>
     );
}
 
export default Header;