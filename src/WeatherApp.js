import React from 'react';

import { view as Weather } from './weather/';
import { view as CitySelector } from './city_selector/'

class WeatherApp extends React.Component {
  render() {
    return (
      <div>
        <CitySelector />
        <Weather />
      </div>
    )
  }
}

export default WeatherApp;