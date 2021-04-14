import connect from '../axios';

const provincesService = {
    getAll: () => connect.get('Province.json') 
};

export default provincesService;
