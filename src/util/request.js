import axios from 'axios';


axios.defaults.withCredentials = true;
const request = axios.create({
    baseURL:'http://localhost:8080/api/v1',
    headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})


export default request;