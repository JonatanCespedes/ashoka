import React from 'react';

import UnitProvince from './UnitProvince';

import provincesService from '../../API/services/provincias';

const Map = () => {
    return ( 
        <div className="map">
            <div className="map-mobile-container">
                <img id="map-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-mapa.png" alt="Mapa de Argentina"/>
                {
                    provincesService.getAll.map((provincia, index) => (
                        <UnitProvince key={index} id={provincia.id}/>
                    ))
                }

            </div>
            <div className="map-desktop-container">
                <img id="map-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio-generales_Imagen-mapa.png" alt="Mapa de Argentina"/>
                {
                    provincesService.getAll.map((provincia, index) => (
                        <UnitProvince key={index} id={provincia.id}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Map;