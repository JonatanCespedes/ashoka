import React, {useEffect, useState} from 'react';

import Province from './Province';
import provincesService from '../../API/services/provincias';



const Provinces = () => {

    
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
        
 
    return ( 
        <div className="provinces">
            <div className="provinces-col">
                { provincias != undefined && (provincias.map((province, index) => (
                    index < 10 && 
                    <Province name={province.name} id={province.code} amount={province.total} key={index}/>
                )))}
                
            </div>
            <div className="provinces-col">
            { provincias != undefined && (provincias.map((province, index) => (
                    index >= 10 && 
                    <Province name={province.name} id={province.code} amount={province.total} key={index}/>
                )))}
            </div>
        </div>
     );
}
 
export default Provinces;