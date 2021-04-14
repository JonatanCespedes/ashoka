import React, {useEffect, useState} from 'react';

import provincesService from '../../API/services/provincias';

/* Stylesheet */
import './Filter.css';

/* Components */
import Partaker from './Partaker'

const Filter = () => {

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

    const [allCausas, setAllCausas] = useState([])
    useEffect(() => {
        fetch("https://ashoka-e29af-default-rtdb.firebaseio.com/1m3AweFQ9viO1bAPpQ5yT_0-si2UzZ1rZA1pVzHEFsns/Projects.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            console.log(res)
            let causas = []
            let response = Object.values(res)
            for (let index = 0; index < response.length; index++) {
                if(index != 0){
                let causa = {
                    id : response[index].id,
                    age : response[index].age,
                    name : response[index].name,
                    description : response[index].description,
                    province : response[index].province
                }
                    causas.push(causa)
                }  
            }
            setAllCausas(causas)
        })
    }, []);

    const [idProvincia, setIdProvincia] = useState(-1);
    const [nameProvincia, setNameProvincia] = useState('')
    let provincia = idProvincia    
    
        
    const getProvincia = function(e) {
        const provincia = e.target.value.split(',');
        setNameProvincia(provincia[1]);
        setIdProvincia(provincia[0]);
    };

    const [causas, setCausas] = useState([])

    useEffect(() => {
        fetch(`https://ashoka-e29af-default-rtdb.firebaseio.com/1m3AweFQ9viO1bAPpQ5yT_0-si2UzZ1rZA1pVzHEFsns/Projects.json?orderBy="province"&equalTo="${provincia}"`)
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            let causas = []
            let response = Object.values(res)
            for (let index = 0; index < response.length; index++) {
                let causa = {
                    id : response[index].id,
                    causa: response[index].causa,
                    age : response[index].age,
                    participante : response[index].participante,
                    description : response[index].description,
                    province : response[index].province
                }
                causas.push(causa)
            }
            
            setCausas(causas)
        })
    }, [idProvincia]);

    console.log(causas)

    return ( 
        <section className="filter-section">
            <div className="filter-title">
                <h2>CONOCÉ JÓVENES DE CADA PROVINCIA Y SUS CAUSAS</h2>
                <hr/>
            </div>
            <div className="filter-selects">
                <div className="select1">
                    <select name="provincia" onChange={getProvincia}>
                    <option hidden selected>BUSCAR POR PROVINCIA</option>
                        {
                           provincias  && (provincias.map(provincia => (
                                <option key={provincia.id} value={[provincia.code, provincia.name]}>{provincia.name}</option>
                            )))
                        }
                    </select>
                </div>
               
                <div className="select2">
                    <select>
                        <option hidden selected>BUSCAR POR CAUSA</option>
                        {
                            allCausas && (
                                allCausas.map((causa, index) => (
                                    <option key={index} value={causa.name}>{causa.name}</option>
                                ))
                            )
                        }
                    </select>
                </div>
                
            </div>
            <div className="filter-result">
                <div className="filter-result-title">PROVINCIA</div>
                <Partaker causas={causas} provincia={nameProvincia}/>
            </div>
        </section>
     );
}
 
export default Filter;