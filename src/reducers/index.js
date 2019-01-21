import { combineReducers } from "redux";
import homeReducer from './home';

// LT-TODO - Will I ever have mroe than one reducer?
export const rootReducer = () => {
  return combineReducers({
    homeReducer
  });
} 