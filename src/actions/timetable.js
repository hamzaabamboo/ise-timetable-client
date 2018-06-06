import axios from 'axios';
import qs from 'qs';
import store from '../store';

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
			dispatch(search('2190101'));
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
			console.log(res.data.data);
		})
		.catch(err => {
			//Handle Error (Later)
		});
