import React from 'react';
import Input from '../Input/Input';
import './Contact.css';

const Contact = () => {

    let reset = () => {
        document.getElementById("contact_form").submit()
        setTimeout(()=>{
            document.getElementById("contact_form").reset();
        }, 500)
        document.getElementById("gracias").style.display = 'block';
    }


    return ( 
        <section id="contacto" className="contact-section">
                <h3 data-aos="fade" className="text-orange">
                    CONTACTANOS!
                </h3>
            <div className="contact__container">
                <div data-aos="fade-left" data-aos-delay="200" className="contact__info">   
                    <p >Si tenés alguna duda, ¡consultanos!<br/>
                    Te responderemos los más rápido posible.</p>
                    <a  href="mailto:infoargentina@ashoka.org">infoargentina@ashoka.org</a>
                    <div className="d-flex">
                    <a className="wp" href="https://api.whatsapp.com/send?phone=+541122889487" target="_blank" rel="noreferrer"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27"><title>Ashoka-Landing-Escritorio</title><g id="iconos"><path class="cls-1" d="M14,4a8.7,8.7,0,0,0-8.26,8.71,8.43,8.43,0,0,0,1,3.91l-.93,4.48a.34.34,0,0,0,.41.4l4.39-1A8.69,8.69,0,1,0,14,4ZM19.25,17.5a6.81,6.81,0,0,1-7.84,1.28l-.61-.3-2.69.63.57-2.74-.31-.59a6.81,6.81,0,1,1,12.87-3.09A6.82,6.82,0,0,1,19.25,17.5Z"/><path class="cls-1" d="M18.65,14.57,17,14.09a.64.64,0,0,0-.62.16l-.41.42a.6.6,0,0,1-.67.14,9.09,9.09,0,0,1-2.9-2.55.62.62,0,0,1,.05-.68l.36-.47a.62.62,0,0,0,.08-.63l-.71-1.61a.63.63,0,0,0-1-.22,2.79,2.79,0,0,0-1.09,1.67c-.12,1.18.38,2.66,2.3,4.45,2.2,2.06,4,2.33,5.13,2.05A2.79,2.79,0,0,0,19,15.51.62.62,0,0,0,18.65,14.57Z"/></g></svg>
                    </a>
                    <a href="https://instagram.com/tribu.24" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><title>Ashoka-Landing-Mobile</title><g id="iconos"><path class="cls-1" d="M13.47,5.28a3.9,3.9,0,0,0-.26-1.36,2.88,2.88,0,0,0-1.63-1.63A4.35,4.35,0,0,0,10.23,2c-.6,0-.78,0-2.3,0S6.23,2,5.64,2a4.15,4.15,0,0,0-1.36.26,2.59,2.59,0,0,0-1,.65,2.59,2.59,0,0,0-.65,1A4.16,4.16,0,0,0,2.4,5.27c0,.6,0,.79,0,2.3s0,1.7,0,2.3a4.08,4.08,0,0,0,.26,1.35,2.88,2.88,0,0,0,1.63,1.63,4.14,4.14,0,0,0,1.35.26c.6,0,.79,0,2.3,0s1.7,0,2.3,0a4.08,4.08,0,0,0,1.35-.26,2.84,2.84,0,0,0,1.63-1.63,4.08,4.08,0,0,0,.26-1.35c0-.6,0-.79,0-2.3S13.5,5.87,13.47,5.28Zm-1,4.54a3.46,3.46,0,0,1-.19,1,1.9,1.9,0,0,1-1.06,1.06,3.44,3.44,0,0,1-1,.19c-.59,0-.77,0-2.26,0s-1.66,0-2.25,0a3.44,3.44,0,0,1-1-.19A1.7,1.7,0,0,1,4,11.5a1.83,1.83,0,0,1-.42-.64,3.37,3.37,0,0,1-.19-1c0-.59,0-.77,0-2.25s0-1.67,0-2.25a3.46,3.46,0,0,1,.19-1A1.83,1.83,0,0,1,4,3.65a1.8,1.8,0,0,1,.64-.41,3.09,3.09,0,0,1,1-.2c.58,0,.76,0,2.25,0S9.6,3,10.19,3a3,3,0,0,1,1,.2,1.8,1.8,0,0,1,.64.41,1.7,1.7,0,0,1,.42.64,3.46,3.46,0,0,1,.19,1c0,.58,0,.76,0,2.25S12.49,9.24,12.47,9.82Z"/><path class="cls-1" d="M7.93,4.71a2.86,2.86,0,1,0,2.86,2.86A2.86,2.86,0,0,0,7.93,4.71Zm0,4.72A1.86,1.86,0,1,1,9.79,7.57,1.85,1.85,0,0,1,7.93,9.43Z"/><path class="cls-1" d="M11.58,4.6a.67.67,0,0,1-1.34,0,.67.67,0,0,1,1.34,0Z"/></g></svg>
                    <span id="tribu">tribu.24</span></a>
                    </div>
                </div>
                <div data-aos="fade" data-aos-delay="200" className="contact__form">
                    <iframe name="hidden_iframe" id="hidden_iframe" style={{display:'none'}} ></iframe>
                    
                    <form autoComplete="off" className="form-container" id={'contact_form'}
                          action="https://docs.google.com/forms/u/6/d/e/1FAIpQLSeI24Nxykmvb0PeORkgqlrf14CJ1AqglpD6kYxdpSHOCHn0KA/formResponse"
                          target="hidden_iframe" rel="noreferrer"  method="POST" onSubmit={reset}>
                        <Input inputName="Nombre" id="inputName" type="text" name="entry.671579841" className="input-white"/>
                        <Input inputName="Email" id="inputEmail" type="email" name="entry.2054205968" className="input-white"/>
                        <Input inputName="Celular" id="inputCel" type="text" name="entry.2037571448" className="input-white"/>
                        <textarea placeholder="Consulta" name="entry.1057034501" id="" cols="30" rows="10"></textarea>
                        <p id="gracias" style={{display:'none'}}><b>Gracias por escribirnos, te responderemos a la brevedad.</b></p>
                        <div className="contact_button">
                            <button className="btn-white" type="submit" onClick={reset}>ENVIAR</button>
                        </div>
                    </form>
                </div>
            </div>        
        </section>
     );
}
 
export default Contact;