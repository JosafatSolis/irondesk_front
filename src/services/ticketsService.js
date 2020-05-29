import axios from 'axios';
import { base_url } from './baseUrl';

export const getTickets = () => {
    return axios.get(`${base_url}/tickets/`);
}

export const getTicketsByTenantId = (tenantId) => {
    return axios.get(`${base_url}/tickets/bytenant/${tenantId}`);
}

export const getOpenTicketsCountByTenantId = (tenantId) => {
    return axios.get(`${base_url}/tickets/bytenant/${tenantId}/open`);
}

export const postNewTicket = (ticket) => {
    return axios.post(`${base_url}/tickets/`, ticket);
}

export const patchTecnicianName = (ticket) => {
    return axios.patch(`${base_url}/tickets/${ticket._id}`, ticket)
}