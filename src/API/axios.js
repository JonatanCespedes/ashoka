import axios from 'axios';

const baseURL = 'https://localhost:3000';
const token = window.localStorage.getItem('_Token');

const connect = axios.create({
  baseURL,
  headers: {
    token,
  },
});

export default connect;
