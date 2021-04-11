import React from 'react';

import UnitProvince from './UnitProvince'

const Map = () => {
    return ( 
        <div className="map">
            <div className="map-mobile-container">
                <img id="map-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-mapa.png" alt="Mapa de Argentina"/>
                <UnitProvince id="santaCruz"/>
                <UnitProvince id="chubut"/>
                <UnitProvince id="rioNegro"/>
                <UnitProvince id="neuquen"/>
                <UnitProvince id="laPampa"/>
                <UnitProvince id="buenosAires"/>
                <UnitProvince id="caba"/>
                <UnitProvince id="mendoza"/>
                <UnitProvince id="sanLuis"/>
                <UnitProvince id="cordoba"/>
                <UnitProvince id="santaFe"/>
                <UnitProvince id="entreRios"/>
                <UnitProvince id="sanJuan"/>
                <UnitProvince id="laRioja"/>
                <UnitProvince id="catamarca"/>
                <UnitProvince id="tucuman"/>
                <UnitProvince id="santiagoDelEstero"/>
                <UnitProvince id="salta"/>
                <UnitProvince id="jujuy"/>
                <UnitProvince id="chaco"/>
                <UnitProvince id="formosa"/>
                <UnitProvince id="corrientes"/>
                <UnitProvince id="misiones"/>
            </div>
            <div className="map-desktop-container">
                <img id="map-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio-generales_Imagen-mapa.png" alt="Mapa de Argentina"/>
            </div>
        </div>
     );
}
 
export default Map;