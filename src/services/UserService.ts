import axios from 'axios';
import { CredentialsType } from '../types.ts/auth.type';

const API_URL = 'https://reqres.in/api';

// Function to register a user
export const register = async (credentials: CredentialsType) => {
  return axios.post(`${API_URL}/register`, credentials);
};

// Function to login a user
export const login = async (credentials: CredentialsType) => {
  return axios.post(`${API_URL}/login`, credentials);
};
