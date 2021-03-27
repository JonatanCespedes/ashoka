import React from 'react';

import './Input.css';

const Input = (props) => {

    return ( 
        
        <div className="form__input">
            <input type={props.type} name={props.name} placeholder={props.inputName} className={props.className} requirednom/>
        </div>
        
     );
}
 
export default Input;