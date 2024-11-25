import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-api.com', // Replace with your API endpoint
});

export const getUsers = () => api.get('/users');
export const createUser = (user) => api.post('/users', user);
export const deleteUser = (email) => api.delete(`/users/${email}`);
export const getRoles = () => api.get('/roles');
export const createRole = (role) => api.post('/roles', role);
export const deleteRole = (roleName) => api.delete(`/roles/${roleName}`);
