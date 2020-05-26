import axios from 'axios';
import { base_url } from './baseUrl';
axios.defaults.withCredentials = true;

// Regresan promesas

export const login = (email, password) => {
    return axios.post(`${base_url}/login`, {email, password});
}

export const logout = () => {
    return axios.post(`${base_url}/login/logout`);
}