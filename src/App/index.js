import React, { useState } from 'react';
import { Button, Form } from 'reactstrap';
import getWeather from '../helpers/data/weatherData';
import ShowWeather from '../Components/ShowWeather';
import './App.scss';

function App() {
  const [weather, setWeather] = useState([]);
  const [userInput, setUserInput] = useState('');

  const grabWeather = () => {
    getWeather(userInput)
      .then((response) => {
        weather.push(response);
        setWeather([...weather]);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput('');
    grabWeather();
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  console.warn(weather);

  return (
    <div>
      <Form
      onSubmit={handleSubmit}
      id="get-weather"
      className="shadow p-3 rounded">
        <div className="form-group">
          <h2
            id="search-title">
              Get the Weather
          </h2>
          <input
            type="text"
            className="form-control"
            id="value"
            aria-describedby="location"
            onChange={handleUserInput}>
          </input>
        </div>
      <Button
        type="submit"
        id="search-weather"
        outline color="dark">
          Submit
      </Button>
      </Form>
      <div id="card-container">
      {weather.map((weatherObj) => (
        <ShowWeather
        key={weatherObj.id}
        {...weatherObj}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
