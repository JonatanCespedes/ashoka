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
            const response = await causasService.getAll();
            /* response.map(item => {
                Object.freeze(item)
            }) */
            setAllCausas(response)
        }
        fetchData();
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
   
    let provincia = idProvincia    
    
    /* Setea las causas según la provincia elegida en el mapa y las cabeceras del filtro*/    
    useEffect(() => {
       let provinciaMapa = provincias.filter(item => {
           return item.code === mapProvince
       }) 
       if(provinciaMapa.length !== 0){
        setSelectProvincia(provinciaMapa[0].name)
        setIdProvincia(provinciaMapa[0].code)
       }
    }, [mapProvince]);

    /* Setea el estado de las causas según la provincia elegida */
    const [estadoCausas, setEstadoCausas] = useState([]);

    /* Setea el nombre de provincia que se va a mostrar como cabecera en el desplegable de provincia */    
    const [ selectProvincia, setSelectProvincia ] = useState('BUSCAR POR PROVINCIA');
    const [ selectCausa, setSelectCausa ] = useState("BUSCAR POR CAUSA");

    useEffect(() => {
        if(selectProvincia !== "Todas" && selectCausa === "BUSCAR POR CAUSA"){
            async function fetchData() {
                setEstadoCausas(await causasService.getForProvince(provincia));
            }
            fetchData();
        }    
    }, [idProvincia, provincia]); 
  
     useEffect(() => {
      
             /* Todas las causas de todas las provincias */
            if(selectProvincia === "Todas" && selectCausa === "BUSCAR POR CAUSA"){
                setEstadoCausas(allCausas)   
            }
            /* Todas las causas de todas las provincias */
            if(selectProvincia === 'BUSCAR POR PROVINCIA' && selectCausa === "Todas"){
                setEstadoCausas(allCausas ) 
            }
            /* Todas las causas de todas las provincias */
            if(selectProvincia === "Todas" && selectCausa === "Todas"){
                setEstadoCausas(allCausas)
            }
            /* Todas las causas de la provincia seleccionada */
            if(selectProvincia !== "Todas" && selectProvincia !== 'BUSCAR POR PROVINCIA' && selectCausa === "BUSCAR POR CAUSA"){
               let causasProv = allCausas.filter(causa => {return causa.province === idProvincia})
               setEstadoCausas(causasProv)
            }
            if(selectProvincia !== "Todas" && selectProvincia !== 'BUSCAR POR PROVINCIA' && selectCausa === "Todas"){
                let causasProv = allCausas.filter(causa => {return causa.province === idProvincia})
               setEstadoCausas(causasProv);
             }
            /* Todas las causas del pais que correspondan a la causa seleccionada */
            if(selectProvincia === 'BUSCAR POR PROVINCIA' && selectCausa !== "Todas"){
               let causas = allCausas.filter(causa => {return causa.causa === selectCausa})
               setEstadoCausas(causas)
            }
            if(selectProvincia === 'Todas' && selectCausa !== "Todas" && selectCausa !== "BUSCAR POR CAUSA"){
                let causas = allCausas.filter(causa => {return causa.causa === selectCausa})
                setEstadoCausas(causas)
             }
            if(selectProvincia !== "Todas" && selectProvincia !== 'BUSCAR POR PROVINCIA' && selectCausa !== "Todas" && selectCausa !== "BUSCAR POR CAUSA"){
                let causas = allCausas.filter(causa => { return causa.causa === selectCausa})
                let causasProv = causas.filter(causa => { return causa.province === idProvincia })
                setEstadoCausas(causasProv)
            }
     }, [selectProvincia, selectCausa]);

       /* Despliega filtro provincias */
    const desplegar = () =>{
        document.querySelector('#lista').classList.toggle('none');
    }

    /* Despliega filtro causas */
    const desplegarCausas = () =>{
        document.querySelector('#listaCausas').classList.toggle('none');
    }
   
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
                        <li className="head">{selectProvincia}</li>
                        <div id="lista" className="none" >
                        <li onClick={(e) => {setSelectProvincia(e.target.outerText);setIdProvincia("Todas");}}>Todas</li>
                            {
                                provincias  && (provincias.map(provincia => (
                                    <li key={provincia.id} onClick={(e) => {setSelectProvincia(e.target.outerText);setIdProvincia(e.target.id);}} id={provincia.code} value={[provincia.code, provincia.name]}>{provincia.name}</li>
                                )))
                            }
                        </div>
                    </ul>
                </div>
               
                <div data-aos="fade-left" data-aos-delay="250" className="select2">
                    <ul name="causas" onClick={desplegarCausas}>
                        <li className="headCausa">{selectCausa}</li>
                        <div id="listaCausas" className="none">
                        <li onClick={(e)=>{setSelectCausa(e.target.outerText)}}>Todas</li>
                            {
                                causasUnicas && (
                                    causasUnicas.map((causa, index) => (
                                        <li key={index} onClick={(e)=>{setSelectCausa(e.target.outerText)}} id={causa} value={causa}>{causa}</li>
                                    ))
                                )
                            }
                        </div>
                    </ul>
                </div>  
            </div>
            <div data-aos="fade-left" data-aos-delay="300" className="filter-result">
                <div className="filter-result-title">{selectProvincia}</div>
                <Partaker causas={estadoCausas} provincias={provincias}/>
            </div>
        </section>
     );
}
 
export default Filter;