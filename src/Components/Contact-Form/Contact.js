import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Contact.css';

const Contact = () => {
    return ( 
        <section className="contact-section">
            <h3 className="text-orange">
                CONTACTANOS!
            </h3>
            <p><b>¿Tenés preguntas?</b></p>
            <p>Si tenés alguna duda, ¡consultanos!<br/>
            Te responderemos los más rápido posible.</p>
            <a href="mailto:infoargentina@ashoka.org">infoargentina@ashoka.org</a>
            <form autoComplete="off" className="form-container">
            <Input inputName="Nombre" id="inputName" type="text" name="name" className="input-white"/>
            <Input inputName="Email" id="inputEmail" type="email" name="email" className="input-white"/>
            <Input inputName="Celular" id="inputCel" type="text" name="cel" className="input-white"/>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <Button className="btn-white" text="ENVIAR"/>
            </form>
        </section>
     );
}
 
export default Contact;