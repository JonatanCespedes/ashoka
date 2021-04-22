import React, {useEffect, useState} from 'react';
import provincesService from '../../API/services/provinces';
import causasService from '../../API/services/causas';

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
        async function fetchData() {
            setProvincias( await provincesService.getAll());   
        }       
        fetchData()     
    }, []);

    /* ALL CAUSAS */    
    const [allCausas, setAllCausas] = useState([]);
    const [causasUnicas, setCausasUnicas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setAllCausas( await causasService.getAll());
        }
        fetchData()  
    }, []);

    useEffect(() => {
        let causas = []
        allCausas.forEach(item => {
            causas.push(item.causa)
        })
        const causasSet = new Set(causas);
        const unique = Array.from(causasSet)
        
       setCausasUnicas(unique)
    }, [allCausas]);
   
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
    }, [mapProvince, provincias]);

    /* Setea el estado de las causas según la provincia elegida */
    const [estadoCausas, setEstadoCausas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setEstadoCausas(await causasService.getForProvince(provincia));
        }
        fetchData()
    }, [idProvincia, provincia]);

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
                    <ul name="causas" onClick={desplegarCausas}>
                        <li className="headCausa">BUSCAR POR CAUSA</li>
                        <div id="listaCausas" className="none">
                            {
                                causasUnicas && (
                                    causasUnicas.map((causa, index) => (
                                        <li key={index} onClick={causaSelect} id={causa} value={causa}>{causa}</li>
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