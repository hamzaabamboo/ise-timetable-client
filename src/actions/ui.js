import { TOGGLE_DRAWER, SET_DRAWER } from '../constants';

export const toggleDrawer = () => ({
	type: TOGGLE_DRAWER,
	payload: {}
});

export const setDrawer = set => ({
	type: SET_DRAWER,
	payload: {
		drawer: set
	}
});
