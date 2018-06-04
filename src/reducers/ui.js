import { TOGGLE_DRAWER, SET_DRAWER } from '../constants';

const initialState = {
	drawer: true
};

export default (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_DRAWER:
			return {
				...state,
				drawer: !state.drawer
			};
		case SET_DRAWER:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};
