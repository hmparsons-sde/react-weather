import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

const getWeatherData = (userInput) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}${userInput}&appid=${firebaseConfig.apiKey}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getWeatherData;
