import axios from 'axios';
import { base_url } from './baseUrl';

export const getTickets = () => {
    return axios.get(`${base_url}/tickets/`);
}

export const getTicketsByTenantId = (tenantId) => {
    return axios.get(`${base_url}/tickets/bytenant/${tenantId}`);
}