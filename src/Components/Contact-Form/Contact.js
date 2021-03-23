import React, {useState, useEffect} from 'react';
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
            <div className="contact__container">
                <div className="contact__info">   
                    <p><b>¿Tenés preguntas?</b></p>
                    <p>Si tenés alguna duda, ¡consultanos!<br/>
                    Te responderemos los más rápido posible.</p>
                    <a href="mailto:infoargentina@ashoka.org">infoargentina@ashoka.org</a>
                </div>
                <div className="contact__form">
                    <form autoComplete="off" className="form-container">
                        <Input inputName="Nombre" id="inputName" type="text" name="name" className="input-white"/>
                        <Input inputName="Email" id="inputEmail" type="email" name="email" className="input-white"/>
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