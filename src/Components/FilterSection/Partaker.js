import React from 'react';

const Partaker = ({
    causas,
    provincia
}) => {

    console.log(causas)
    return ( 
        <>
            { 
               causas.lenght !== 0 ? causas.map(causa => 
                    <div className="filter-partaker">
                    <span>NOMBRE</span>
                    <p>{causa.participante}</p>
                    <span>EDAD</span>
                    <p>{causa.age}</p>
                    <span>CAUSA A TRANSFORMAR</span>
                    <p>{causa.causa}</p>
                    <span>PROVINCIA</span>
                    <p>{provincia}</p>
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