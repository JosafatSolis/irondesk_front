import axios from 'axios';
import { base_url } from './baseUrl';
axios.defaults.withCredentials = true;

// Regresan promesas, se debe enviar el objeto COMPLETO, no con destructuring

export const login = (data) => {
    console.log(base_url);
    return axios.post(`${base_url}/login`, data);
}

export const logout = () => {
    return axios.post(`${base_url}/login/logout`);
}