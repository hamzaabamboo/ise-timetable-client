import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import auth from './auth';

export default combineReducers({
	auth,
	ui,
	routing: routerReducer
});
