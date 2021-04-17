import React, {useEffect, useState} from 'react';

/* Stylesheet */
import './Filter.css';

/* Components */
import Partaker from './Partaker'

const Filter = ({
    mapProvince
}) => {

    /* ALL PROVINCES */
    const [provincias, setProvincias] = useState([]);

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
                    provincias.push(provincia);
                }  
            }
            setProvincias(provincias);
        })
    }, []);

    /* ALL CAUSAS */    
    const [allCausas, setAllCausas] = useState([]);

    useEffect(() => {
        fetch("https://ashoka-e29af-default-rtdb.firebaseio.com/1m3AweFQ9viO1bAPpQ5yT_0-si2UzZ1rZA1pVzHEFsns/Projects.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            let causas = []
            let response = Object.values(res)
            for (let index = 0; index < response.length; index++) {
                if(index !== 0){
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

    /* Setea el estado de el nombre y código de la provincia elegida */

    const [idProvincia, setIdProvincia] = useState(-1);
    const [nameProvincia, setNameProvincia] = useState('')
    let provincia = idProvincia    
    
    /* Setea las causas según la provincia elegida en el mapa y las cabeceras del filtro*/    
    useEffect(() => {
       let provinciaMapa = provincias.filter(item => {
           return item.code === mapProvince
       }) 
       if(provinciaMapa.length !== 0){
        setIdProvincia(provinciaMapa[0].code);
        setNameProvincia(provinciaMapa[0].name);
        document.querySelector('.head').innerHTML = `${provinciaMapa[0].name}`;
        document.querySelector('.headCausa').innerHTML = "BUSCAR POR CAUSA";
       }
    }, [mapProvince]);

    /* Setea el estado de las causas según la provincia elegida */
    const [estadoCausas, setEstadoCausas] = useState([]);

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

    /* Captura la causa elegida desde el desplegable y setea el estado de las causas a mostrar */
    const getCausa = function(e) {
        const causa = e.target.value;
        let causasFiltradas = allCausas.filter(item => {
            return item.causa === causa
        });
       setEstadoCausas(causasFiltradas);
    };

    /* Setea el nombre de provincia que se va a mostrar como cabecera en el desplegable de provincia */    
    const provinciaSelect = function(e) {
        const provincia = e.target.outerText;
        document.querySelector('.head').innerHTML = `${provincia}`;
        document.querySelector('.headCausa').innerHTML = "BUSCAR POR CAUSA";
        setNameProvincia(provincia);
        setIdProvincia(e.target.id);  
    };

    /* Despliega filtro provincias */
    const desplegar = () =>{
        document.querySelector('#lista').classList.toggle('none');
    }

    /* Despliega filtro causas */
    const desplegarCausas = () =>{
        document.querySelector('#listaCausas').classList.toggle('none')
    }

    /* Captura la causa seleccionada en el filtro y setea la cabecera */
    const causaSelect = function(e) {
        const causa = e.target.outerText;
        document.querySelector('.headCausa').innerHTML = `${causa}`
        document.querySelector('.head').innerHTML = "BUSCAR POR PROVINCIA";
        setNameProvincia(causa.toUpperCase())
        let causasFiltradas = allCausas.filter(item => {
            return item.causa === causa
        })
       setEstadoCausas(causasFiltradas)
    };

    /* Cambia el hash para algo misterioso*/
    const changeHash = () => {
        if(window.scrollY >= 3248){
            window.location.hash = "#a"
        }
    }
    window.addEventListener('scroll', changeHash);

    return ( 
        <section className="filter-section" id="filter">
            <div className="filter-title">
                <h2 data-aos="fade-up">CONOCÉ JÓVENES DE CADA PROVINCIA Y SUS CAUSAS</h2>
                <hr/>
            </div>
            <div className="filter-selects">
                <div data-aos="fade-left" data-aos-delay="200" className="select1">
                    <ul name="provincia"  onClick={desplegar}>
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
               
                <div data-aos="fade-left" data-aos-delay="250" className="select2">
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
            <div data-aos="fade-left" data-aos-delay="300" className="filter-result">
                <div className="filter-result-title">{nameProvincia}</div>
                <Partaker causas={estadoCausas} provincias={provincias}/>
            </div>
        </section>
     );
}
 
export default Filter;