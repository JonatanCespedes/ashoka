import React, {useEffect, useState} from 'react';

import UnitProvince from './UnitProvince';

const Map = ({
    setMapProvince
}) => {

    const [provincias, setProvincias] = useState([])
    useEffect(() => {
        fetch("https://ashoka-e29af-default-rtdb.firebaseio.com/1m3AweFQ9viO1bAPpQ5yT_0-si2UzZ1rZA1pVzHEFsns/Province.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            let provincias = []
            let response = Object.values(res)
            for (let index = 0; index < response.length; index++) {
                if(index != 0){
                let provincia = {
                    code : response[index].code,
                    name : response[index].name,
                    total : response[index].total
                }
                    provincias.push(provincia)
                }  
            }
            setProvincias(provincias)
        })
    }, []);
    
    const getProvince = function(e) {
        const provincia = e.target.htmlFor;
        setMapProvince(provincia)
        console.log(provincia)
        window.location.hash = "filter" 
    };


    
    return ( 
        <div className="map">
            <div className="map-mobile-container">
                <img id="map-mobile" src="images/mobile/PNG/Ashoka-Landing-Mobile_Imagen-mapa.png" alt="Mapa de Argentina"/>
                {
                    provincias != undefined && (provincias.map((provincia, index) => (
                        <UnitProvince key={index} id={provincia.code} click={getProvince}/>
                    )))
                }
            </div>
            <div className="map-desktop-container">
                <img id="map-desktop" src="images/desktop/PNG/Ashoka-Landing-Escritorio-generales_Imagen-mapa.png" alt="Mapa de Argentina"/>
                {
                     provincias != undefined && (provincias.map((provincia, index) => (
                        <UnitProvince key={index} id={provincia.code} click={getProvince}/>
                    )))
                }
            </div>
        </div>
     );
}
 
export default Map;