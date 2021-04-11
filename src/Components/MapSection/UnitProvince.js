import React from 'react';

const UnitProvince = ({
    id,
    key
}) => {
    return ( 
        <div key={key} className="province-container" id={id}>
            <label for={id} className="circle">

            </label>
        </div>
     );
}
 
export default UnitProvince;