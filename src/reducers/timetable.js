import { SEARCH_RESULT, CLEAR_RESULT, ADD_SUBJECT } from '../constants';
import moment from 'moment';

const initialState = {
	searchResults: [],
	createEvent: {
		monday: [],
		tuesday: [],
		wednesday: [],
		thursday: [],
		friday: []
	},
	unannounced: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_RESULT:
			return {
				...state,
				...action.payload
			};
		case CLEAR_RESULT:
			return {
				...state,
				...action.payload
			};
		case ADD_SUBJECT:
			let { times, ...rest } = action.payload;
			let newTime = Object.assign({}, state.createEvent);
			let newUnannounced = Array.from(state.unannounced);
			let found = false;
			times.forEach(e => {
				if (e.day.toLowerCase() in state.createEvent) {
					newTime[e.day.toLowerCase()].push({
						...rest,
						startTime: moment(e.startTime, 'hhmm'),
						endTime: moment(e.endTime, 'hhmm')
					});
					found = true;
				} else {
					if (!found) {
						newUnannounced.push({
							id: action.payload.id,
							name: action.payload.name,
							section: action.payload.section
						});
						found = true;
					}
				}
			});
			return {
				...state,
				createEvent: newTime,
				unannounced: newUnannounced
			};
		default:
			return state;
	}
};
