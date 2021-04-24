import React from 'react';
import { PropTypes } from 'prop-types';

import {
  Card, CardText, CardBody,
  CardTitle,
} from 'reactstrap';

// eslint-disable-next-line arrow-body-style
const WeatherCard = (props) => {
  return (
<div className='weather-card-container d-flex flex-wrap'>
      {props.weatherArray.map((obj, i) => <Card key={i} className='w-25 weather-card' style={{
        backgroundImage: `url(http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png)`,
      }}>
        <CardBody>
          <CardTitle tag="h3">{obj.name}</CardTitle>
        </CardBody >
        <CardBody >
          <CardText>{obj.weather[0].description} {obj.main.temp}F</CardText>
        </CardBody>
      </Card>)}
</div>
  );
};

WeatherCard.propTypes = {
  weatherArray: PropTypes.array
};

export default WeatherCard;
