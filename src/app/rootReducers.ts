import { combineReducers } from 'redux';
import counterReducer from '../feature/counter/counterSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
});
