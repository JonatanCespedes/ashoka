import React from 'react';

const Partaker = ({
    causas,
    provincias,
}) => {
        provincias.forEach(provincia => {
        causas.map(causa => {
                if(causa.province === provincia.code){
                    causa.province = provincia.name
                }  
            })
        })
    return ( 
        < >
            { 
               causas.length !== 0 ? causas.map(causa => 
                    <div key={causa.age} className="filter-partaker">
                        <span>NOMBRE</span>
                        <p>{causa.participante}</p>
                        <span>EDAD</span>
                        <p>{causa.age}</p>
                        <span>CAUSA A TRANSFORMAR</span>
                        <p>{causa.causa}</p>
                        <span>DESCRIPCIÓN</span>
                        <p>{causa.description}</p>
                        <span>PROVINCIA</span>
                        <p>{causa.province}</p>
                    </div>
                ) : 
                <div className="filter-partaker">
                    <h2>AÚN NO HAY PARTICIPANTES</h2> 
                </div>
            }
            
       </>
     );
}
 
export default Partaker;