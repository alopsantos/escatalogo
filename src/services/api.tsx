import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/alopsantos/apifakeescatalogo/'
})

export default api;