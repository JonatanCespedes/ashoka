import React from 'react';

import Button from '../Button/Button';
import Input from '../Input/Input';
import './Contact.css';

const Contact = () => {

    return ( 
        <section id="contacto" className="contact-section">
                <h3 className="text-orange">
                    CONTACTANOS!
                </h3>
            <div className="contact__container">
                <div className="contact__info">   
                    <p >Si tenés alguna duda, ¡consultanos!<br/>
                    Te responderemos los más rápido posible.</p>
                    <a  href="mailto:infoargentina@ashoka.org">infoargentina@ashoka.org</a>
                    <a className="wp" href="mailto:infoargentina@ashoka.org"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><title>Ashoka-Landing-Escritorio</title><g id="iconos"><path class="cls-1" d="M14,4a8.7,8.7,0,0,0-8.26,8.71,8.43,8.43,0,0,0,1,3.91l-.93,4.48a.34.34,0,0,0,.41.4l4.39-1A8.69,8.69,0,1,0,14,4ZM19.25,17.5a6.81,6.81,0,0,1-7.84,1.28l-.61-.3-2.69.63.57-2.74-.31-.59a6.81,6.81,0,1,1,12.87-3.09A6.82,6.82,0,0,1,19.25,17.5Z"/><path class="cls-1" d="M18.65,14.57,17,14.09a.64.64,0,0,0-.62.16l-.41.42a.6.6,0,0,1-.67.14,9.09,9.09,0,0,1-2.9-2.55.62.62,0,0,1,.05-.68l.36-.47a.62.62,0,0,0,.08-.63l-.71-1.61a.63.63,0,0,0-1-.22,2.79,2.79,0,0,0-1.09,1.67c-.12,1.18.38,2.66,2.3,4.45,2.2,2.06,4,2.33,5.13,2.05A2.79,2.79,0,0,0,19,15.51.62.62,0,0,0,18.65,14.57Z"/></g></svg>
                    +54 11 5555-5555</a>
                    
                </div>
                <div className="contact__form">
                    <form action="https://formsubmit.co/develop.jec@gmail.com" autoComplete="off" method="POST" className="form-container">
                        <Input inputName="Nombre" id="inputName" type="text" name="name" className="input-white" require/>
                        <Input inputName="Email" id="inputEmail" type="email" name="email" className="input-white" required/>
                        <Input inputName="Celular" id="inputCel" type="text" name="cel" className="input-white"/>
                        <textarea placeholder="Consulta" name="message" id="" cols="30" rows="10"></textarea>
                        <Button className="btn-white" text="ENVIAR"/>
                    </form>
                </div>
            </div>        
        </section>
     );
}
 
export default Contact;