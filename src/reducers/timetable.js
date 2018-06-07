import { SEARCH_RESULT, CLEAR_RESULT, ADD_SUBJECT } from '../constants';

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
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};
