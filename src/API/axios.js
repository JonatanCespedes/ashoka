import axios from 'axios';

const baseURL = 'https://ashoka-e29af-default-rtdb.firebaseio.com/1m3AweFQ9viO1bAPpQ5yT_0-si2UzZ1rZA1pVzHEFsns/';


const connect = axios.create({
  baseURL,
});

export default connect;
