import React from 'react';

const Partaker = ({
    causas,
    provincia
}) => {

    console.log(causas)
    return ( 
        <div className="filter-partaker">
            {
                causas.map(causa => 
                    <div>
                    <span>NOMBRE</span>
                    <p>{causa.participante}</p>
                    <span>EDAD</span>
                    <p>{causa.age}</p>
                    <span>CAUSA A TRANSFORMAR</span>
                    <p>{causa.causa}</p>
                    <span>PROVINCIA</span>
                    <p>{provincia}</p>
                    </div>
                )  
            }
            
        </div>
     );
}
 
export default Partaker;