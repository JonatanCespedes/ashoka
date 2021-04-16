import React, {useEffect, useState} from 'react';
import './Header.css';


const Header = () => {

    const [navBar, setNavBar] = useState(false);

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

    const changebackground = () => {
        if(window.scrollY >= 80){
            setNavBar(true);
        }else {
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changebackground);
    
    return ( 
        <header className={navBar ? 'header active' : 'header'}>
            <section className="container">
                <div className="logos-mobile">
                    <a href="/">
                    <img alt="Logo Ashoka" id="logo-1" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Header-Ashoka.png"/>
                    <img alt="Logo Tribu24" id="logo-2" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Header-Tribu24.png"/>
                    </a>
                </div>
                <div className="logos-tablet">
                <a href="/">
                    <img alt="Logo Ashoka" id="logo-1" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Ashoka-Footer.png"/>
                    <img alt="Logo Tribu24" id="logo-2" src="images/mobile/PNG/Ashoka-Landing-Mobile_Logo-Tribu24-Footer.png"/>
                </a>
                </div>
                <div className="logos-desktop">
                <a href="/">
                    <img alt="Logo Ashoka" id="logo-1" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Header-Ashoka.png"/>
                    <img alt="Logo Tribu24" id="logo-2" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Logo-Header-Tribu24.png"/>
                </a>
                </div>
                <button className={ navBar ? "btn-menu active" : 'btn-menu'}>
                   <img alt="Boton" src="images/mobile/SVG/Ashoka-Landing-Mobile_Icono-01.svg" />
                   <span className="none"><i class="fas fa-times"></i></span>
                </button>
                <nav class={ navBar ? "menu active" : 'menu'}>
                    <a href="#acerca-d" id="acerca-desktop">ACERCA DE</a>
                    <a href="#acerca-m" id="acerca-mobile">ACERCA DE</a>
                    <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=BTQjvGUP1Uebu1jccl31xgNPV0Fju-tBoArgYbey4LdUN1lSOFJVR0FBTDZXVlkwOUdETkk3MEgzOCQlQCN0PWcu" target="_blank" rel="noreferrer">SUMATE</a>
                    <a href="#tribu">TRIBU</a>
                    <a href="#camino">EL CAMINO</a>
                    <a href="#argentina">TRANSFORMANDO ARGENTINA</a>
                    <a href="#ashoka">ASHOKA</a>
                    <a href="#fellows">FELLOWS</a>
                    <a href="#contacto">CONTACTO</a>
                </nav>
            </section>
        </header>
     );
}
 
export default Header;