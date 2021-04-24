import React, { useState } from 'react';
import {
  Form, FormGroup, Input
} from 'reactstrap';
import weatherData from '../helpers/data/weatherData';
import WeatherCard from '../Components/WeatherApp';
import './App.scss';

function App() {
  const [weatherArray, setWeatherArray] = useState([]);
  const handleEnterPress = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      const city = e.target.value;
      weatherData(city).then((response) => {
        weatherArray.push(response);
        setWeatherArray([...weatherArray]);
      });
    }
  };
  return (
    <div className='App'>
      <header>
        <h1 className='header-text'>Do you need a jacket?</h1>
      </header>
        <WeatherCard weatherArray={weatherArray}/>
        <div className='form-container'>
          <Form>
            <FormGroup>
                <Input type="text" name="city" id="city" placeholder="Enter city name" onKeyPress={handleEnterPress}/>
            </FormGroup>
          </Form>
        </div>
    </div>
  );
}

export default App;
