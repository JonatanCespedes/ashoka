import React from 'react';

const Province = ({
    name = "PROVINCIA",
    amount = "02",
    id, 
    key,
    click,
}
) => {
    return ( 
        <div key={key} className="province">
            <a className="provincia-hash" href="#filter" onClick={click} id={id}><span className="text-white amount" id={id}>{amount}</span> <span className="name" id={id}>{name}</span></a>
        </div>
     );
}
 
export default Province;