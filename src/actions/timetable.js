import axios from 'axios';
import qs from 'qs';
import store from '../store';
import {
	SEARCH_RESULT,
	CLEAR_RESULT,
	ADD_SUBJECT,
	ALREADY_ADDED,
	NOT_FOUND
} from '../constants';
import moment from 'moment';

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
	if (data.length === 0) return { type: NOT_FOUND };
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
	let { schedule, id, name, type, building, room, section } = data;
	let newTime = { ...store.getState().timetable.createEvent };
	let already = Object.keys(newTime).reduce((f, e) => {
		return [...f, ...newTime[e].map(g => g.id)];
	}, []);
	if (already.includes(id)) {
		return { type: ALREADY_ADDED };
	} else {
		let newUnannounced = Array.from(store.getState().timetable.unannounced);
		let found = false;
		schedule.forEach(e => {
			e.subjects_of_day.forEach(f => {
				if (e.day.toLowerCase() in newTime) {
					newTime[e.day.toLowerCase()].push({
						id,
						name,
						type,
						building,
						room,
						section,
						startTime: moment(f.starttime, 'hhmm'),
						endTime: moment(f.endtime, 'hhmm')
					});
					found = true;
				} else if (!found) {
					newUnannounced.push({ id, name, section });
					found = true;
				}
			});
		});
		return {
			type: ADD_SUBJECT,
			payload: {
				createEvent: newTime,
				unannounced: newUnannounced
			}
		};
	}
};
