import React from 'react';

/* Stylesheets */
import './Map.css';

/* Components */
import Map from './Map';
import Button from '../Button';
import Provinces from './Provinces';


const MapSection = ({
    setMapProvince,
    mapProvince
}) => {
    return (
        <section className="map-section" id="argentina">
            <div className="map-title">
                <h2>TRANSFORMANDO ARGENTINA</h2>
                <hr/>
            </div> 
            <div className="map-section-desktop">
                <Map setMapProvince={setMapProvince}/>
                <div className="provinces-desktop">
                    <Provinces setMapProvince={setMapProvince} mapProvince={mapProvince}/>
                    <div className="map-section-action">
                        <h6>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20"><title>Ashoka-Landing-Mobile</title><g id="iconos"><polygon class="cls-1" points="11.27 8.93 4.33 1.96 4.33 2 4.33 15.9 11.27 8.93"/></g></svg>
                            VAMOS A SELECCIONAR 48 JÓVENES <br/> <span className="text-white"> (2 POR PROVINCIA) </span> <span className="text-orange">PARA INTEGRAR LA TRIBU</span>   
                        </h6>
                        <Button id="orange" className="btn-orange btn-map" text="¡SUMATE!"/>
                    </div>     
                </div>
            </div>            
        </section>
    )
}

export default MapSection;
