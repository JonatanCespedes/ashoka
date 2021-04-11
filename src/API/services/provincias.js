import connect from '../axios';

const provincesService = {
    // getAll: () => connect.get('Province.json'),
    getAll: [
        {
            amount: 2,
            name: "JUJUY"
        },
        {
            amount: 2,
            name: "SALTA"
        },{
            amount: 2,
            name: "CATAMARCA"
        },{
            amount: 2,
            name: "SAN JUAN"
        },{
            amount: 2,
            name: "LA RIOJA"
        },{
            amount: 2,
            name: "SAN LUIS"
        },{
            amount: 2,
            name: "MENDOZA"
        },{
            amount: 2,
            name: "NEUQUÉN"
        },{
            amount: 2,
            name: "CHUBUT"
        },{
            amount: 2,
            name: "LA PAMPA"
        },{
            amount: 2,
            name: "FORMOSA"
        },{
            amount: 2,
            name: "CHACO"
        },{
            amount: 2,
            name: "SANTIAGO DEL ESTERO"
        },{
            amount: 2,
            name: "CORRIENTES"
        },{
            amount: 2,
            name: "SANTA FÉ"
        },{
            amount: 2,
            name: "ENTRE RÍOS"
        },{
            amount: 2,
            name: "AMBA"
        },{
            amount: 2,
            name: "BUENOS AIRES"
        },{
            amount: 2,
            name: "RÍO NEGRO"
        },{
            amount: 2,
            name: "SANTA CRUZ"
        },{
            amount: 2,
            name: "TUCUMAN"
        },
    ]
};

export default provincesService;
