import React from 'react';

/* Stylesheet */
import './Filter.css';

/* Components */

const Filter = () => {
    return ( 
        <section className="filter-section">
            <div className="filter-title">
                <h2>CONOCÉ JÓVENES DE CADA PROVINCIA Y SUS CAUSAS</h2>
                <hr/>
            </div>
            <div className="filter-selects">
                <select>
                    <option hidden selected>BUSCAR POR PROVINCIA</option>
                </select>
                <select>
                    <option hidden selected>BUSCAR POR CAUSA</option>
                </select>
            </div>
            <div>
                <div className="filter-province-title">PROVINCIA</div>
                <div className="partaker">
                    <span>NOMBRE</span>
                    <p>Acá el nombre</p>
                    <span>EDAD</span>
                    <p>Acá el nombre</p>
                    <span>CAUSA A TRANSFORMAR</span>
                    <p>Acá el nombre</p>
                    <span>PROVINCIA</span>
                    <p>Acá el nombre</p>
                </div>
                <div className="partaker">
                    <span>NOMBRE</span>
                    <p>Acá el nombre</p>
                    <span>EDAD</span>
                    <p>Acá el nombre</p>
                    <span>CAUSA A TRANSFORMAR</span>
                    <p>Acá el nombre</p>
                    <span>PROVINCIA</span>
                    <p>Acá el nombre</p>
                </div>
            </div>
            
        </section>
     );
}
 
export default Filter;