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

    var reset = () => {
        //document.getElementById("contact_form").reset();
        document.getElementById("gracias").style.display = 'block';
    }

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
                    <iframe name="hidden_iframe" id="hidden_iframe" style={{display:'none'}}
                            onLoad="if(submitted) {window.location='thankyou.html';}"></iframe>
                    <p id="gracias" style={{display:'none'}}><b>Gracias por contactarte</b></p>
                    <form autoComplete="off" className="form-container" id={'contact_form'}
                          action="https://docs.google.com/forms/d/e/1FAIpQLSd054WJx5e6-VB8RWb-O-ntOrUkqunTDRVC-rLOMHzpuFahgg/formResponse"
                          target="hidden_iframe"  method="post" onSubmit={reset}>
                        <Input inputName="Nombre" id="inputName" type="text" name="entry.1924373565" className="input-white"/>
                        <Input inputName="Email" id="inputEmail" type="email" name="entry.993016979" className="input-white"/>
                        <Input inputName="Celular" id="inputCel" type="text" name="entry.890105707" className="input-white"/>
                        <textarea placeholder="Consulta" name="entry.412920707" id="" cols="30" rows="10"></textarea>
                        <Button className="btn-white" text="ENVIAR" onClick={reset}/>
                    </form>
                </div>
            </div>        
        </section>
     );
}
 
export default Contact;