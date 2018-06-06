import axios from 'axios';
import qs from 'qs';

const proxy = 'https://cryptic-headland-94862.herokuapp.com/';
const path = proxy + 'http://www3.reg.chula.ac.th/cureg-test/web/index.php?r=';

export const getInfo = (username, password) => dispatch =>
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
