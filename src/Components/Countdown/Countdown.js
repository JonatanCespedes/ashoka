import React, {useState, useEffect} from 'react';
import Button from '../Button/Button'

import './Countdown.css';

const Countdown = () => {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear(),
        difference = +new Date(`03/28/${year}`) - +new Date(),
        timeleft = {}

        if (difference > 0) {
            timeleft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)) != 0 ? Math.floor(difference / (1000 * 60 * 60 * 24)) : '0',
                horas: Math.floor((difference / (1000 * 60 * 60 )) % 24) != 0 ? Math.floor((difference / (1000 * 60 * 60 )) % 24) : '00',
                minutos: Math.floor((difference / 1000 / 60 ) % 60) != 0 ? Math.floor((difference / 1000 / 60 ) % 60) : '00',
                segundos: Math.floor((difference / 1000) % 60) != 0 ? Math.floor((difference / 1000) % 60) : '00'
            };
        }
        return timeleft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(()=> {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });
    
    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if(!timeLeft[interval]){
            return ;
        }

        timerComponents.push(
            <div className="countdown-item">
                <span>
                    {timeLeft[interval]}{" "}
                </span>
                <p>{interval}</p>
            </div>
            
        );
    });
    return ( 
        <section className="countdown-section">
            <div className="countdown-container">
                <h2 data-aos="fade-up" className="text-blue">¿CUÁNTO FALTA PARA EL CIERRE DE LA CONVOCATORIA?</h2>
                <hr/>
                <div  className="countdown-timer-container">
                    {timerComponents.length ? timerComponents : <span> Time`s up!</span>}
                </div>
                
            </div>
            <Button dataAos="fade-up" href="https://forms.office.com/Pages/ResponsePage.aspx?id=BTQjvGUP1Uebu1jccl31xgNPV0Fju-tBoArgYbey4LdUN1lSOFJVR0FBTDZXVlkwOUdETkk3MEgzOCQlQCN0PWcu" className="btn-orange" text="¡SUMATE A LA TRIBU24!"/>
        </section>
     );
}
 
export default Countdown;