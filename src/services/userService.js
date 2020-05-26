import axios from 'axios';
import { base_url } from './baseUrl';

export const getUsers = (params) => {
    return axios.get(`${base_url}/users`);
}