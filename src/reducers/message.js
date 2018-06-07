import { ALREADY_ADDED, HIDE, NOT_FOUND } from '../constants';

const initialState = {
	message: '',
	show: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ALREADY_ADDED:
			return {
				show: true,
				message: 'Subject already added'
			};
		case NOT_FOUND:
			return {
				show: true,
				message: 'Subject not found'
			};
		case HIDE:
			return {
				...action.payload
			};
		default:
			return state;
	}
};
