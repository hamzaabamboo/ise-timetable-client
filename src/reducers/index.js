import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import auth from './auth';
import info from './info';

export default combineReducers({
	auth,
	ui,
	info,
	routing: routerReducer
});
