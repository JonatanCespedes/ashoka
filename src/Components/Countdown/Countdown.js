import React, {useState, useEffect} from 'react';
import Button from '../Button/Button'

import './Countdown.css';

const Countdown = () => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear(),
        difference = +new Date(`04/16/${year}`) - +new Date(),
        timeleft = {}

        if (difference > 0) {
            timeleft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60 )) % 24),
                minutos: Math.floor((difference / 1000 / 60 ) % 60),
                segundos: Math.floor((difference / 1000) % 60)
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
            <div>
                <span>
                    {timeLeft[interval]}{" "}
                </span>
                <p>{interval}</p>
            </div>
            
        );
    });
    return ( 
        <section className="countdown-section">
            <div>
                <h2 className="text-blue">¿CUÁNTO FALTA PARA EL CIERRE DE LA CONVOCATORIA?</h2>
                <hr/>
                <div className="countdown-timer-container">
                    {timerComponents.length ? timerComponents : <span> Time`s up!</span>}
                </div>
                
            </div>
            <Button className="btn-orange" text="¡SUMATE A LA TRIBU24!"/>
        </section>
     );
}
 
export default Countdown;