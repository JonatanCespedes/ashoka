import connect from '../axios';

const provincesService = {
    getAll: async() => {
        let provincias = []
        await connect.get('/Province.json')
        .then(data => {
            let response = Object.values(data.data)
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
        })
        return provincias 
    },
}

export default provincesService;