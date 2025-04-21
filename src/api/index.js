import axios from 'axios';

const axiosInstanceUser = axios.create({
  baseURL: 'https://randomuser.me',
});

export const getUser = () => axiosInstanceUser('/api');
