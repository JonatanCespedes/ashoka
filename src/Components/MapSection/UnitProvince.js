import React from 'react';

const UnitProvince = ({
    id,
    key, 
    click
}) => {
    return ( 
        <div key={key} className="province-container" id={id}>
            <label for={id} className="circle" onClick={click}></label>
        </div>
     );
}
 
export default UnitProvince;