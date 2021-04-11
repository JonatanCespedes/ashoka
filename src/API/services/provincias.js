import connect from '../axios';

const provincesService = {
    // getAll: () => connect.get('Province.json'),
    getAll: [
        {
            amount: "02",
            name: "JUJUY",
            id: "jujuy",
        },
        {
            amount: "02",
            name: "SALTA",
            id: "salta"
        },{
            amount: "02",
            name: "CATAMARCA",
            id: "catamarca"

        },{
            amount: "02",
            name: "SAN JUAN",
            id: "sanJuan"
        },{
            amount: "02",
            name: "LA RIOJA",
            id: "laRioja"
        },{
            amount: "02",
            name: "SAN LUIS",
            id: "sanLuis"
        },{
            amount: "02",
            name: "MENDOZA",
            id: "mendoza"
        },{
            amount: "02",
            name: "NEUQUÉN",
            id: "neuquen"
        },{
            amount: "02",
            name: "CHUBUT",
            id: "chubut"
        },{
            amount: "02",
            name: "LA PAMPA",
            id: "laPampa"
        },{
            amount: "02",
            name: "FORMOSA",
            id: "formosa"
        },{
            amount: "02",
            name: "CHACO",
            id: "chaco"
        },{
            amount: "02",
            name: "SANTIAGO DEL ESTERO",
            id: "santiagoDelEstero"
        },{
            amount: "02",
            name: "CORRIENTES",
            id: "corrientes"
        },{
            amount: "02",
            name: "SANTA FÉ",
            id: "santaFe"
        },{
            amount: "02",
            name: "ENTRE RÍOS",
            id: "entreRios"
        },{
            amount: "02",
            name: "CABA",
            id: "caba"
        },{
            amount: "02",
            name: "BUENOS AIRES",
            id: "buenosAires"
        },{
            amount: "02",
            name: "RÍO NEGRO",
            id: "rioNegro"
        },{
            amount: "02",
            name: "SANTA CRUZ",
            id: "santaCruz"
        },{
            amount: "02",
            name: "TUCUMAN",
            id: "tucuman"
        },
        {
            amount: "02",
            name: "CÓRDOBA",
            id: "cordoba"
        },
        {
            amount: "02",
            name: "MISIONES",
            id: "misiones"
        },
    ]
};

export default provincesService;
