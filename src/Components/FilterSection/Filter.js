import React, {useEffect, useState} from 'react';

/* Stylesheet */
import './Filter.css';

/* Components */
import Partaker from './Partaker'

const Filter = ({
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
            let causas = []
            let response = Object.values(res)
            for (let index = 0; index < response.length; index++) {
                if(index != 0){
                let causa = {
                    id : response[index].id,
                    age : response[index].age,
                    name : response[index].name,
                    causa : response[index].causa,
                    participante : response[index].participante,
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

    useEffect(() => {
       let provinciaMapa = provincias.filter(item => {
           return item.code === mapProvince
       }) 
       
       if(provinciaMapa.length != 0){
        setIdProvincia(provinciaMapa[0].code);
        setNameProvincia(provinciaMapa[0].name);
        let option = document.querySelectorAll('#provincias')
        for (let index = 0; index < option.length; index++) {
            if(option[index].value[0] == provinciaMapa[0].code){
                option[index].setAttribute('selected', '')
            } 
        }
       }
      
       console.log(idProvincia)
       fetch("https://ashoka-e29af-default-rtdb.firebaseio.com/1m3AweFQ9viO1bAPpQ5yT_0-si2UzZ1rZA1pVzHEFsns/Projects.json")
       .then(function(response) {
           return response.json();
       })
       .then(function(res) {
           let causas = []
           let response = Object.values(res)
           for (let index = 0; index < response.length; index++) {
               if(index != 0){
               let causa = {
                   id : response[index].id,
                   age : response[index].age,
                   name : response[index].name,
                   causa : response[index].causa,
                   participante : response[index].participante,
                   description : response[index].description,
                   province : response[index].province
               }
                   causas.push(causa)
               }  
           }
           setAllCausas(causas)
       })
    }, [mapProvince]);

   

    useEffect(() => {
        fetch(`https://ashoka-e29af-default-rtdb.firebaseio.com/1m3AweFQ9viO1bAPpQ5yT_0-si2UzZ1rZA1pVzHEFsns/Projects.json?orderBy="province"&equalTo="${provincia}"`)
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            let causas = [];
            let response = Object.values(res);
            for (let index = 0; index < response.length; index++) {
                let causa = {
                    id : response[index].id,
                    causa: response[index].causa,
                    age : response[index].age,
                    participante : response[index].participante,
                    description : response[index].description,
                    province : response[index].province
                };
                causas.push(causa);
            }
            
            setEstadoCausas(causas);
        })
    }, [idProvincia]);

    const [estadoCausas, setEstadoCausas] = useState([]);
   
    const getCausa = function(e) {
        const causa = e.target.value;
        let causasFiltradas = allCausas.filter(item => {
            return item.causa == causa
        });
       setEstadoCausas(causasFiltradas);
    };

    const desplegar = () =>{
        document.querySelector('#lista').classList.toggle('none');
    }

    const provinciaSelect = function(e) {
        const provincia = e.target.outerText;
        document.querySelector('.head').innerHTML = `${provincia}`;
        setNameProvincia(provincia);
        setIdProvincia(e.target.id);  
    };

    const desplegarCausas = () =>{
        document.querySelector('#listaCausas').classList.toggle('none')
    }

    const causaSelect = function(e) {
        const causa = e.target.outerText;
        document.querySelector('.headCausa').innerHTML = `${causa}`
        setNameProvincia(causa.toUpperCase())
        let causasFiltradas = allCausas.filter(item => {
            return item.causa == causa
        })
       setEstadoCausas(causasFiltradas)
    };





    return ( 
        <section className="filter-section" id="filter">
            <div className="filter-title">
                <h2>CONOCÉ JÓVENES DE CADA PROVINCIA Y SUS CAUSAS</h2>
                <hr/>
            </div>
            <div className="filter-selects">
                <div className="select1">
                    <ul name="provincia" onChange={getProvincia} onClick={desplegar}>
                    <li className="head">BUSCAR POR PROVINCIA</li>
                    <div id="lista" className="none" >
                    {
                           provincias  && (provincias.map(provincia => (
                                <li key={provincia.id} onClick={provinciaSelect} id={provincia.code} value={[provincia.code, provincia.name]}>{provincia.name}</li>
                            )))
                        }
                    </div>
                     
                    </ul>
                </div>
               
                <div className="select2">
                    <ul name="causas" onChange={getCausa} onClick={desplegarCausas}>
                        
                        <li className="headCausa">BUSCAR POR CAUSA</li>
                        <div id="listaCausas" className="none">
                        {
                            allCausas && (
                                allCausas.map((causa, index) => (
                                    <li key={index} onClick={causaSelect} id={causa.causa} value={causa.causa}>{causa.causa}</li>
                                ))
                            )
                        }
                        </div>
                    </ul>
                </div>
                
            </div>
            <div className="filter-result">
                <div className="filter-result-title">{nameProvincia}</div>
                <Partaker causas={estadoCausas}/>
            </div>
        </section>
     );
}
 
export default Filter;