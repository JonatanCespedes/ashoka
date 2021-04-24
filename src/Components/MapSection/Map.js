import React, {useEffect, useState} from 'react';
import provincesService from '../../API/services/provinces';

import UnitProvince from './UnitProvince';

const Map = ({
    setMapProvince
}) => {

    const [provincias, setProvincias] = useState([])
    useEffect(() => {
        async function fetchData() {
            setProvincias( await provincesService.getAll());   
        }       
        fetchData()
    }, []);
    

    console.log(provincias)

    const getProvince = function(e) {
        const provincia = e.target.htmlFor;
        setMapProvince(provincia)
        window.location.hash = "filter" 
    };


    
    return ( 
        <div className="map">
            <div data-aos="fade-left" data-aos-delay="200" className="map-mobile-container">
                <img id="map-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-mapa.png" alt="Mapa de Argentina"/>
                {
                    provincias !== undefined && (provincias.map((provincia, index) => (
                        <UnitProvince key={index} id={provincia.code} click={getProvince}/>
                    )))
                }
            </div>
            <div data-aos="fade-left" data-aos-delay="200" className="map-desktop-container">
                <img id="map-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio-generales_Imagen-mapa.png" alt="Mapa de Argentina"/>
                {
                     provincias !== undefined && (provincias.map((provincia, index) => (
                        <UnitProvince key={index} id={provincia.code} click={getProvince}/>
                    )))
                }
            </div>
        </div>
     );
}
 
export default Map;