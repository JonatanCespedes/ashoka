import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Contact.css';

const Contact = () => {

    useEffect(() => {
        Aos.init({duration: 3000}); 
    }, []);

    return ( 
        <section id="contacto" className="contact-section">
                <h3 data-aos="fade" className="text-orange">
                    CONTACTANOS!
                </h3>
            <div className="contact__container">
                <div className="contact__info">   
                    <p data-aos="slide-right"><b>¿Tenés preguntas?</b></p>
                    <p data-aos="fade">Si tenés alguna duda, ¡consultanos!<br/>
                    Te responderemos los más rápido posible.</p>
                    <a data-aos="fade" href="mailto:infoargentina@ashoka.org">infoargentina@ashoka.org</a>
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