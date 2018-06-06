import { LOGIN_SUCCESS, LOGOUT } from '../constants';

const initialState = {
	token: localStorage.getItem('token') || null,
	name: localStorage.getItem('name') || null,
	username: localStorage.getItem('username') || null,
	isLoggedIn: !!localStorage.getItem('token')
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				...action.payload
			};
		case LOGOUT:
			return {
				token: null,
				name: null,
				username: null,
				isLoggedIn: false
			};
		default:
			return state;
	}
};
