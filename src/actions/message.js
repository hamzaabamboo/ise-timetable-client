import { HIDE } from '../constants';

export const hide = () => {
	return {
		type: HIDE,
		payload: {
			show: false,
			message: ''
		}
	};
};
