import React from 'react';

import './Input.css';

const Input = (props) => {
   
    const inputFocus = () =>{
        document.querySelector('#inputForm').classList.remove('input-white');
        document.querySelector('#inputForm').classList.add('input-white-focus');
    }

    const inputBlur = () => {
        document.querySelector('#inputForm').classList.remove('input-white-focus');
        document.querySelector('#inputForm').classList.add('input-white');
    }

    return ( 
        
        <div>
            <input id='inputForm' onFocus={inputFocus} onBlur={inputBlur} type={props.type} name={props.name} placeholder={props.inputName} className={props.className}/>
        </div>
        
     );
}
 
export default Input;