import axios from 'axios';
import qs from 'qs';
import store from '../store';
import { SEARCH_RESULT, CLEAR_RESULT, ADD_SUBJECT } from '../constants';

const proxy = 'https://cryptic-headland-94862.herokuapp.com/';
const path = proxy + 'http://www3.reg.chula.ac.th/cureg-test/web/index.php?r=';

export const getTimetable = () => dispatch =>
	axios
		.post(
			path + 'student-reg/getcr54',
			qs.stringify({
				token: store.getState().auth.token
			}),
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
		)
		.then(res => {
			//Handle Response
		})
		.catch(err => {
			//Handle Error (Later)
		});

export const search = query => dispatch =>
	axios
		.post(
			path + 'student-reg/browseclass',
			qs.stringify({
				token: store.getState().auth.token,
				search: query
			}),
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
		)
		.then(res => {
			//Handle Response
			dispatch(updateResults(res.data.data));
		})
		.catch(err => {
			//Handle Error (Later)
		});

export const updateResults = data => {
	const searchResults = data.map(e => {
		return {
			id: e.COURSECODE,
			name: e.COURSENAME,
			section: e.SECTION,
			type: e.TEACHTYPE,
			building: e.BUILDING,
			room: e.ROOM,
			schedule: e.FORMAT_SCHEDULE
		};
	});
	return { type: SEARCH_RESULT, payload: { searchResults } };
};

export const clear = () => ({
	type: CLEAR_RESULT,
	payload: { searchResults: [] }
});

export const add = data => {
	let { schedule, ...rest } = data;
	let times = [];
	schedule.forEach(e => {
		e.subjects_of_day.forEach(f => {
			times.push({
				startTime: f.starttime,
				endTime: f.endtime,
				day: e.day
			});
		});
	});
	return {
		type: ADD_SUBJECT,
		payload: {
			...rest,
			times
		}
	};
};
