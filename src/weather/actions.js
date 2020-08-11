import { FETCHT_STARTED, FETCH_SUCCESS, FETCH_FAILURE, FETCH_STARTED } from './actionTypes';

export const fetchWeatherStarted = () => ({
  type: FETCH_STARTED
});

export const fetchWeatherSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_FAILURE,
  error
});

export const fetchWeather = (cityCode) => {
  return (dispatch) => {
    const apiUrl = `/data/citiinfo/${cityCode}.html`;
    dispatch(fetchWeatherStarted());

    fetch(apiUrl).then((response) => {
      if(response.status !== 200) {
        throw new Error('Fail to get response with status:' + response.status);
      }
      response.json().then((responseJson) => {
        dispatch(fetchWeatherSuccess(responseJson));
      }).catch((error) => {
        throw new Error('invalid json response' + error);
      })
    }).catch((error) => {
      dispatch(fetchWeatherFailure(error));
    })

  }
}