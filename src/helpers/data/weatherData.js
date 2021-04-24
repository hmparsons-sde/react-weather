import axios from 'axios';
import firebaseConfig from '../apiKeys';

const weatherData = (city) => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${firebaseConfig.apiKey}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default weatherData;
