import { FETCH_INFO } from '../constants';

const initialState = {
	name: '',
	major: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_INFO:
			return {
				name: action.payload.name,
				major: action.payload.major,
			};
		default:
			return state;
	}
};
