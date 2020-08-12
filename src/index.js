import React from 'react';
import ReactDOM from 'react-dom';

import store from './Store.js';
import WeatherApp from './WeatherApp';

import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
  document.getElementById('root')
)