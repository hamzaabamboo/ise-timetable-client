import axios from 'axios';
import qs from 'qs';
import { FETCH_INFO } from '../constants';
import store from '../store';

const proxy = 'https://cryptic-headland-94862.herokuapp.com/';
const path = proxy + 'http://www3.reg.chula.ac.th/cureg-test/web/index.php?r=';

export const getInfo = () => dispatch =>
	axios
		.post(
			path + 'student-reg/getuserinfo',
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
			dispatch(fetchInfo(res.data.studentInfo));
		})
		.catch(err => {
			//Handle Error (Later)
		});

export const fetchInfo = data => {
	let { en_name, en_majorName, photo } = data;
	switch (en_majorName.toLowerCase()) {
		case 'information and communication engineering':
			en_majorName = 'ICE';
			break;
		case 'nano engineering':
			en_majorName = 'NANO';
			break;
		case 'aerospace engineering':
			en_majorName = 'AERO';
			break;
		case 'automotive design and manufacturing engineering':
			en_majorName = 'ADME';
			break;
		default:
			en_majorName = ':D';
	}
	return {
		type: FETCH_INFO,
		payload: {
			name: en_name.substring(en_name.indexOf('.') + 1),
			major: en_majorName,
			photo: photo
		}
	};
};
