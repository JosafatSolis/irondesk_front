import axios from 'axios';
import { base_url } from './baseUrl';
axios.defaults.withCredentials = true;

// Regresan promesas

export const login = (credentials) => {
    return axios.post(`${base_url}/login`, credentials);
}

export const logout = () => {
    return axios.post(`${base_url}/login/logout`);
}