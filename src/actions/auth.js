import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../constants';
import { push } from 'react-router-redux';
import axios from 'axios';
import qs from 'qs';
import store from '../store';

const proxy = 'https://cryptic-headland-94862.herokuapp.com/';
const path = proxy + 'http://www3.reg.chula.ac.th/cureg-test/web/index.php?r=';

export const login = (username, password) => dispatch =>
	axios
		.post(
			path + 'student-reg/login',
			qs.stringify({
				username,
				password
			}),
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
		)
		.then(res => {
			if (res.data.code === 400) dispatch(loginFail(res.data));
			else dispatch(loginSuccess(res.data.data));
		})
		.catch(err => dispatch(loginFail(err)));

export const loginSuccess = data => {
	let { token, name, username } = data;
	name = name.split(',')[0];
	localStorage.setItem('token', token);
	localStorage.setItem('name', name);
	localStorage.setItem('username', username);
	store.dispatch(push('/'));
	return {
		type: LOGIN_SUCCESS,
		payload: {
			token,
			name,
			username,
			isLoggedIn: true
		}
	};
};
export const loginFail = err => {
	if (err.codeError)
		return {
			type: LOGIN_FAIL,
			payload: {
				message: err.codeError
			}
		};
	else
		return {
			type: LOGIN_FAIL,
			payload: {
				message: err.message
			}
		};
};
export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('name');
	localStorage.removeItem('username');
	store.dispatch(push('/login'));
	return {
		type: LOGOUT,
		payload: {}
	};
};
