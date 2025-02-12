import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}`;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    
})