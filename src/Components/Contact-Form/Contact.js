import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../Button/Button'
import './Contact.css';

const Contact = () => {
    return ( 
        <section className="contact-section">
            <h3>
                CONTACTANOS!
            </h3>
            <p><b>¿Tenés preguntas?</b></p>
            <p>Si tenés alguna duda, ¡consultanos!</p>
            <p>Te responderemos los más rápido posible.</p>
            <a href="mailto:infoargentina@ashoka.org">infoargentina@ashoka.org</a>
            <form autoComplete="off">
                <TextField id="outlined-basic" label="Nombre y apellido" variant="outlined"/>
                <TextField id="outlined-basic" label="Nombre y apellido" variant="outlined"/>
                <TextField id="outlined-basic" label="Nombre y apellido" variant="outlined"/>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="outlined"
                />
            <Button className="btn-white" text="ENVIAR"/>
            </form>

        </section>
     );
}
 
export default Contact;