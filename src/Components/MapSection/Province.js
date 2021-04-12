import React from 'react';

const Province = ({
    name = "PROVINCIA",
    amount = "02",
    id, 
    key,
}
) => {
    return ( 
        <div key={key} className="province">
            <a href="#filter" id={id} ><span className="text-white amount">{amount}</span> <span className="name">{name}</span></a>
        </div>
     );
}
 
export default Province;