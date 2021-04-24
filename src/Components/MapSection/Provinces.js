import React, {useEffect, useState} from 'react';
import provincesService from '../../API/services/provinces';

import Province from './Province';

const Provinces = ({
    setMapProvince,
    mapProvince
}) => {

    
    const [provincias, setProvincias] = useState([])

        useEffect(() => {
            async function fetchData() {
                setProvincias( await provincesService.getAll());   
            }       
            fetchData()     
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
            <div data-aos="fade-left" data-aos-delay="400" className="provinces-col">
                { provincias !== undefined && (provincias.map((province, index) => (
                    index < 12 && 
                    <Province name={province.name} click={pintarProvincia} id={province.code} amount={province.total} key={index}/>
                )))}
                
            </div>
            <div data-aos="fade-left" data-aos-delay="500" className="provinces-col">
            { provincias !== undefined && (provincias.map((province, index) => (
                    index >= 12 && 
                    <Province name={province.name} click={pintarProvincia} id={province.code} amount={province.total} key={index}/>
                )))}
            </div>
        </div>
     );
}
 
export default Provinces;