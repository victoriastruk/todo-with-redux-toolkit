import axios from 'axios';

const axiosInstanceUser = axios.create({
  baseURL: 'https://randomuser.me',
});
const axiosInstanceWeather = axios.create({
    baseURL: 'https://api.open-meteo.com'
})
export const getUser = () => axiosInstanceUser('/api');
export const getWeather = () => axiosInstanceWeather('/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&timezone=auto')
