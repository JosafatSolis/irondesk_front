import axios from 'axios';
import { base_url } from './baseUrl';

export const getTickets = (params) => {
    axios.get(`${base_url}/tickets/`, params);
}