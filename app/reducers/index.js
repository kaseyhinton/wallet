// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
const accounts = (state = []) => state;

const rootReducer = combineReducers({
  accounts,
  counter,
  router,
});

export default rootReducer;
