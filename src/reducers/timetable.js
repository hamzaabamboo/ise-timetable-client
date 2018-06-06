import { SEARCH_RESULT, CLEAR_RESULT } from '../constants';

const initialState = {
	searchResult: []
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
		default:
			return state;
	}
};
