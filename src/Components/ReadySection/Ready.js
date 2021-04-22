import React from 'react';
import './Ready.css';

const Ready = () => {

    return ( 
        <section id="tribu" className="ready-section">
            <h3 data-aos="fade-up" className="ready-title text-cian">
                ¿ESTÁS PARA LA TRIBU?
            </h3>   
            <div data-aos="fade-up"  data-aos-delay="400" className="cards">
                <div  className="card">
                    <div className="img-container">
                        <img alt="" className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Icono-05.png"/>
                    </div>
                    <h6 className="text-cian">TENÉS UNA IDEA</h6>
                    <p className="p-mobile">
                        ¿Empatizaste con un problema?<br/>
                        ¿Encontraste una posible solución?<br/>
                        ¿Ya empezaste a resolverlo?
                    </p>
                    <div className="p-desktop">
                        <p>¿Empatizaste con un problema?</p>
                        <p>¿Encontraste una posible solución?</p>
                        <p>¿Ya empezaste a resolverlo?</p>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img alt="" className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Icono-06.png"/>
                    </div>
                    <h6 className="text-cian">FORMÁS UN EQUIPO</h6>
                    <p className="p-mobile">
                        ¿Cómo movilizás a otras personas?<br/>
                        ¿Te gustaría co-crear con tus pares?<br/>
                        ¿De qué manera podemos multiplicar soluciones?
                    </p>
                    <div className="p-desktop">
                        <p>¿Cómo movilizás a otras personas?</p>
                        <p>¿Te gustaría co-crear con tus pares?</p>
                        <p>¿De qué manera podemos multiplicar soluciones?</p>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img alt="" className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Icono-07.png"/>
                    </div>
                    <h6 className="text-cian">GENERÁS <br/>UN IMPACTO REAL</h6>
                    <p className="p-mobile">
                        ¿Cuál es la forma de mejorar nuestra realidad?<br/>
                        ¿Hay algo del entorno que atrasa?<br/>
                        ¿Te imaginás aportando al bien común?
                    </p>
                    <div className="p-desktop">
                        <p>¿Cuál es la forma de mejorar nuestra realidad?</p>
                        <p>¿Hay algo del entorno que atrasa?</p>
                        <p>¿Te imaginás aportando al bien común?</p>
                    </div>
                </div>
                <div className="card">
                    <div className="img-container">
                        <img alt="" className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Icono-08.png"/>
                    </div>
                    <h6 className="text-cian">PRACTICÁS <br/> EL CO-LIDERAZGO</h6>
                    <p className="p-mobile">
                        ¿Te gusta lo colaborativo?<br/>
                        ¿Activás el liderazgo de tus pares?<br/>
                        ¿Sabés la importancia de ser agentes de cambio?
                    </p>
                    <div className="p-desktop">
                        <p>¿Te gusta lo colaborativo?</p>
                        <p>¿Activás el liderazgo de tus pares?</p>
                        <p>¿Sabés la importancia de ser agentes de cambio?</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Ready;
