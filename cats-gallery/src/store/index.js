import { combineReducers } from 'redux';
import { breedReducer } from './breeds/reducer';

export const rootReducer = combineReducers({
	breeds: breedReducer,
});
