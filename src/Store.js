import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as weatherReducer } from './weather/';
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
  weather: weatherReducer
});

const middlewares = [thunkMiddleware];
if(process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant')())
};

const storeEnhancers = compose(
  applyMiddleware(...middlewares)
);

export default createStore(reducer, {}, storeEnhancers)