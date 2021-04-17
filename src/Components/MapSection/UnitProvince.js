import React from 'react';

const UnitProvince = ({
    id,
    key, 
    click
}) => {
    return ( 
        <div key={key} className="province-container" id={id}>
            <label htmlFor={id} className="circle" onClick={click}></label>
        </div>
     );
}
 
export default UnitProvince;