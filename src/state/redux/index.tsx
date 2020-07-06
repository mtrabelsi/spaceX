import { combineReducers } from 'redux';
import fetchReducer from './reducer';

const rootReducer = combineReducers({
  tasks: fetchReducer,
});

export default rootReducer;
