import axios from 'axios';
import qs from 'qs';

const path = 'cureg-test/web/index.php?r=';

export const login = (username, password) => dispatch =>
	axios
		.post(
			path + 'student-reg/getuserinfo',
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
			//Handle Response
		})
		.catch(err => {
			//Handle Error (Later)
		});
