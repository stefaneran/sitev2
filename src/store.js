import { createStore } from 'redux';
import { rootReducer } from './reducers';
// Temp
import homeReducer from './reducers/home';

// Create Store 
export const store = createStore(homeReducer);