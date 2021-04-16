import React, {useState, useEffect} from 'react';

const Partaker = ({
    causas,
}) => {
   
    return ( 
        <>
            { 
               causas.lenght !== 0 ? causas.map(causa => 
                    <div key={causa.age} className="filter-partaker">
                    <span>NOMBRE</span>
                    <p>{causa.participante}</p>
                    <span>EDAD</span>
                    <p>{causa.age}</p>
                    <span>CAUSA A TRANSFORMAR</span>
                    <p>{causa.causa}</p>
                    <span>DESCRIPCION</span>
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