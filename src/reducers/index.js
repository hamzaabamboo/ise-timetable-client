import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ui from './ui';
import auth from './auth';
import info from './info';
import timetable from './timetable';
export default combineReducers({
	auth,
	ui,
	info,
	timetable,
	routing: routerReducer
});
