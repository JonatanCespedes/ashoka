import React from 'react';

import Province from './Province';
import provincesService from '../../API/services/provincias';



const Provinces = () => {
    return ( 
        <div className="provinces">
            <div className="provinces-col">
                { provincesService.getAll.map((province, index) => (
                    index < 10 && 
                    <Province name={province.name} id={province.id} amount={province.amount} key={index}/>
                ))}
                
            </div>
            <div className="provinces-col">
            { provincesService.getAll.map((province, index) => (
                    index >= 10 && 
                    <Province name={province.name} id={province.id} amount={province.amount} key={index}/>
                ))}
            </div>
        </div>
     );
}
 
export default Provinces;