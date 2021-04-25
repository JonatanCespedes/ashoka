import React from 'react';

const Partaker = ({
    causas,
}) => {
       console.log(causas)
    return ( 
        < >
            { 
               causas != null && 
               causas.length !== 0 ? causas.map((causa, index) => 
                    <div key={index} className="filter-partaker">
                        <span>NOMBRE</span>
                        <p>{causa.participante}</p>
                        <span>EDAD</span>
                        <p>{causa.age}</p>
                        <span>CAUSA A TRANSFORMAR</span>
                        <p>{causa.causa}</p>
                        <span>DESCRIPCIÓN</span>
                        <p>{causa.description}</p>
                        <span>PROVINCIA</span>
                        <p>{causa.provinceName}</p>
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