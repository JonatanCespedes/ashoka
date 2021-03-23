import React, {useEffect, useState} from 'react';
import './Header.css';


const Header = () => {

    useEffect(() => {
        ((d) => {
            const $btnMenu = d.querySelector(".btn-menu"),
            $menu = d.querySelector(".menu");
        
            $btnMenu.addEventListener("click", e=>{
                $btnMenu.firstElementChild.classList.toggle("none");
                $btnMenu.lastElementChild.classList.toggle("none");
                $menu.classList.toggle("is-active");
            });
        
            d.addEventListener("click", e=>{
                if(!e.target.matches(".menu a"))return false;
        
                $btnMenu.firstElementChild.classList.remove("none");
                $btnMenu.lastElementChild.classList.add("none");
                $menu.classList.remove("is-active");
            })
        })(document);
    }, []);
    
    return ( 
        <header className="header">
            <section className="container">
                <div className="logos-mobile">
                    <img id="logo-1" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Header-Ashoka.png"/>
                    <img id="logo-2" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Header-Tribu24.png"/>
                </div>
                <div className="logos-tablet">
                    <img id="logo-1" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Ashoka-Footer.png"/>
                    <img id="logo-2" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Tribu24-Footer.png"/>
                </div>
                <div className="logos-desktop">
                    <img id="logo-1" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Header-Ashoka.png"/>
                    <img id="logo-2" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Header-Tribu24.png"/>
                </div>
                <button className="btn-menu">
                   <img src="images/mobile/SVG/Ashoka-Landing-Mobile_Icono-01.svg" />
                   <span className="none"><i class="fas fa-times"></i></span>
                </button>
                <nav class="menu">
                    <a href="#acerca">ACERCA DE</a>
                    <a href="#sumate">SUMATE</a>
                    <a href="#tribu">TRIBU</a>
                    <a href="#camino">EL CAMINO</a>
                    <a href="#ashoka">ASHOKA</a>
                    <a href="#contacto">CONTACTO</a>
                </nav>
            </section>
        </header>
     );
}
 
export default Header;