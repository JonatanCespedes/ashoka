import React from 'react';

import './Ready.css'

const Ready = () => {
    return ( 
        <section className="ready-section">
            <h3 className="video-title text-cian">
                ¿ESTÁS PARA LA TRIBU?
            </h3>   
            <div className="cards">
                <div className="card">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Icono-05.png"/>
                    <h6 className="text-cian">TENÉS UNA IDEA</h6>
                    <p>
                        ¿Empatizaste con un problema?<br/>
                        ¿Encontraste una posible solución?<br/>
                        ¿Ya empezaste a resolverlo?
                    </p>
                </div>
                <div className="card">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Icono-06.png"/>
                    <h6 className="text-cian">LIDERAR UN GRUPO</h6>
                    <p>
                        ¿Cómo acompañar a otrxs agentes de cambio?<br/>
                        ¿De qué manera podemos multiplicarlo por miles?<br/>
                        ¿Te gustaría armar equipo?
                    </p>
                </div>
                <div className="card">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Icono-07.png"/>
                    <h6 className="text-cian">GENERAR <br/>UN IMPACTO REAL</h6>
                    <p>
                        ¿Cuál es la forma de ayudar a mejorar la vida?<br/>
                        ¿Hay algo del entorno que atrasa?<br/>
                        ¿Te imaginás comprometidx con el bien común?
                    </p>
                </div>
                <div className="card">
                    <img src="images/mobile/PNG/Ashoka-Landing-Mobile_Icono-08.png"/>
                    <h6 className="text-cian">PRACTICAR <br/> EL CO-LIDERAZGO</h6>
                    <p>
                        ¿Dónde empujar y generar cambios positivos?<br/>
                        ¿Por qué difundilo masivamente?<br/>
                        ¿Sabés la importancia de ser agentes de cambio?
                    </p>
                </div>
            </div>
        </section>
     );
}
 
export default Ready;
