import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

const httpClient = axios.create({
  baseURL: BASE_URL,
});

export default httpClient;

export * from './auth.service';
export * from './barbers.service';
