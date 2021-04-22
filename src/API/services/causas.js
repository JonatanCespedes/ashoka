import connect from '../axios';

const causasService = {
    getAll: async () => {
        let causas = []
        await connect.get('/Projects.json')
        .then(res => {
            let response = Object.values(res.data)
            for (let index = 0; index < response.length; index++) {
                if(index !== 0){
                let causa = {
                    id : response[index].id,
                    age : response[index].age,
                    causa : response[index].causa,
                    participante : response[index].participante,
                    description : response[index].description,
                    province : response[index].province
                    }
                    causas.push(causa)
                }  
            } 
        })
        .catch(err=>console.log("errores causas " + err))
        return causas
    },
    getForProvince: async (provincia) =>{
        let causas = [];
        await connect.get(`/Projects.json?orderBy="province"&equalTo="${provincia}"`)
        .then(res => {    
            let response = Object.values(res.data);
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
        })
        return causas
    },
}

export default causasService;