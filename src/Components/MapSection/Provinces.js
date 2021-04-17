import React, {useEffect, useState} from 'react';

import Province from './Province';

const Provinces = ({
    setMapProvince,
    mapProvince
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
                    if(index !== 0){
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

        useEffect(() => {
            let provincias = document.querySelectorAll('.provincia-hash');
            let negritas = document.querySelectorAll('.negrita')
            for (let index = 0; index < negritas.length; index++) {
                negritas[index].classList.remove('negrita')
            }
            for (let index = 0; index < provincias.length; index++) {
                
                if (provincias[index].id === mapProvince) {
                    provincias[index].classList.add('negrita')
                }
            }
           
        }, [mapProvince]);

    const pintarProvincia = (e) => {
        let provincias = document.querySelectorAll('.provincia-hash');
        let negritas = document.querySelectorAll('.negrita');
        for (let index = 0; index < negritas.length; index++) {
            negritas[index].classList.remove('negrita')
        }
        for (let index = 0; index < provincias.length; index++) {
            if(provincias[index].text.indexOf(e.target.outerText) !== -1){
                e.target.classList.add('negrita')
                if(e.target.previousElementSibling){
                    e.target.previousElementSibling.classList.add('negrita')
                }
               
            }         
        }
        setMapProvince(e.target.id)
    }    
        
    return ( 
        <div className="provinces">
            <div className="provinces-col">
                { provincias !== undefined && (provincias.map((province, index) => (
                    index < 12 && 
                    <Province name={province.name} click={pintarProvincia} id={province.code} amount={province.total} key={index}/>
                )))}
                
            </div>
            <div className="provinces-col">
            { provincias !== undefined && (provincias.map((province, index) => (
                    index >= 12 && 
                    <Province name={province.name} click={pintarProvincia} id={province.code} amount={province.total} key={index}/>
                )))}
            </div>
        </div>
     );
}
 
export default Provinces;