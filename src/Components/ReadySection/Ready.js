import React from 'react';

import './Ready.css'

const Ready = () => {
    return ( 
        <section className="ready-section">
            <h3 className="ready-title text-cian">
                ¿ESTÁS PARA LA TRIBU?
            </h3>   
            <div className="cards">
                <div className="card">
                    <img className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Icono-05.png"/>
                    <img className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Icono-05.png"/>
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
                    <img className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Icono-06.png"/>
                    <img className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Icono-06.png"/>
                    <h6 className="text-cian">LIDERAR UN GRUPO</h6>
                    <p className="p-mobile">
                        ¿Cómo acompañar a otrxs agentes de cambio?<br/>
                        ¿De qué manera podemos multiplicarlo por miles?<br/>
                        ¿Te gustaría armar equipo?
                    </p>
                    <div className="p-desktop">
                        <p>¿Cómo acompañar a otrxs agentes de cambio?</p>
                        <p>¿De qué manera podemos multiplicarlo por miles?</p>
                        <p>¿Te gustaría armar equipo?</p>
                    </div>
                </div>
                <div className="card">
                    <img className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Icono-07.png"/>
                    <img className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Icono-07.png"/>
                    <h6 className="text-cian">GENERAR <br/>UN IMPACTO REAL</h6>
                    <p className="p-mobile">
                        ¿Cuál es la forma de ayudar a mejorar la vida?<br/>
                        ¿Hay algo del entorno que atrasa?<br/>
                        ¿Te imaginás comprometidx con el bien común?
                    </p>
                    <div className="p-desktop">
                        <p>¿Cuál es la forma de ayudar a mejorar la vida?</p>
                        <p>¿Hay algo del entorno que atrasa?</p>
                        <p>¿Te imaginás comprometidx con el bien común?</p>
                    </div>
                </div>
                <div className="img-mobile" className="card">
                    <img className="img-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Icono-08.png"/>
                    <img className="img-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio_Icono-08.png"/>
                    <h6 className="text-cian">PRACTICAR <br/> EL CO-LIDERAZGO</h6>
                    <p className="p-mobile">
                        ¿Dónde empujar y generar cambios positivos?<br/>
                        ¿Por qué difundilo masivamente?<br/>
                        ¿Sabés la importancia de ser agentes de cambio?
                    </p>
                    <div className="p-desktop">
                        <p>¿Dónde empujar y generar cambios positivos?</p>
                        <p>¿Por qué difundilo masivamente?</p>
                        <p>¿Sabés la importancia de ser agentes de cambio?</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Ready;
