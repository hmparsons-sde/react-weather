import React, { useState } from 'react';
import {
  Form, FormGroup, Input, Button
} from 'reactstrap';
import weatherData from '../helpers/data/weatherData';
// import WeatherCard from '../Components/WeatherApp';
import './App.scss';

function App() {
  const [weather, setWeather] = useState('');
  const [userInput, setUserInput] = useState({
    city: ''
  });

  const getWeather = () => {
    weatherData(userInput.city)
      .then((temp) => {
        setWeather(temp);
      });
    setWeather({
      city: userInput.city
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput({
      city: ''
    });
    getWeather();
  };

  const handleUserInput = (e) => {
    setWeather({
      ...weather,
      [e.target.id]: e.target.value
    });
  };

  return (
      <div className='App'>
      <header>
        <h1 className='header-text'>Do you need a jacket?</h1>
      </header>
      <div>
        <Form className="form" onSubmit={handleSubmit}>
          <FormGroup>
                <Input type="text" name="city" id="city" placeholder="Enter city name" onChange={handleUserInput}></Input>
            </FormGroup>
         <Button type='submit'>
          Submit
        </Button>
       </Form>
       <div id="weatherContainer">{weather}</div>
      </div>
    </div>
  );
}

export default App;
