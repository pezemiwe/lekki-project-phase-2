import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://sfc-lekki-property.herokuapp.com/api';

const client = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

const axiosClient = {
    get: (url: string): Promise<AxiosResponse> => client.get(url),
    post: (url: string, data: any): Promise<AxiosResponse> => client.post(url, data),
    put: (url: string, data: any): Promise<AxiosResponse> => client.put(url, data),
    delete: (url: string): Promise<AxiosResponse> => client.delete(url),
    patch: (url: string, data: any): Promise<AxiosResponse> => client.patch(url, data),
}

export default axiosClient;
