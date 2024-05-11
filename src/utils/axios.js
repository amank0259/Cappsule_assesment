import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://backend.cappsule.co.in/api/v1/'
})

export default instance;