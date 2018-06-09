import axios from 'axios';
import qs from 'qs';
import store from '../store';
import {
	SEARCH_RESULT,
	CLEAR_RESULT,
	ADD_SUBJECT,
	ALREADY_ADDED,
	NOT_FOUND,
	REMOVE_SUBJECT
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
	let addedList = [...store.getState().timetable.added];
	let already = Object.keys(newTime).reduce((f, e) => {
		return [...f, ...newTime[e].map(g => g.id)];
	}, []);
	if (already.includes(id)) {
		return { type: ALREADY_ADDED };
	} else {
		//TODO: Hot swap section
		let newUnannounced = [...store.getState().timetable.unannounced];
		let found = false;
		schedule.forEach((e, no) => {
			e.subjects_of_day.forEach(f => {
				if (e.day.toLowerCase() in newTime) {
					let dat = {
						id,
						name,
						type,
						building,
						room,
						section,
						startTime: moment(f.starttime, 'hhmm'),
						endTime: moment(f.endtime, 'hhmm'),
						no
					};
					newTime[e.day.toLowerCase()].push(dat);
					if (!found) {
						addedList.push(dat);
						found = true;
					}
				} else if (!found) {
					newUnannounced.push({ id, name, section });
					addedList.push({ id, name, section });
					found = true;
				}
			});
		});
		return {
			type: ADD_SUBJECT,
			payload: {
				createEvent: newTime,
				unannounced: newUnannounced,
				added: addedList
			}
		};
	}
};
export const remove = data => {
	let { added, unannounced, createEvent } = store.getState().timetable;
	let newAdded = added.filter(e => e.id !== data.id);
	let newUnannounced = unannounced.filter(e => e.id !== data.id);
	let newEventList = Object.keys(createEvent).reduce((f, e) => {
		return { ...f, [e]: createEvent[e].filter(g => g.id !== data.id) };
	}, {});
	return {
		type: REMOVE_SUBJECT,
		payload: {
			createEvent: newEventList,
			unannounced: newUnannounced,
			added: newAdded
		}
	};
};
