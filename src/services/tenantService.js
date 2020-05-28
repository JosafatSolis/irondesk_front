import axios from 'axios';
import { base_url } from './baseUrl';

export const getTenants = () => {
    return axios.get(`${base_url}/tenants`);
}