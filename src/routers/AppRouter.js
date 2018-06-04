import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import Home from '../scenes/Home';
import Timetable from '../scenes/Timetable';
import Page from './Page';
import { history } from '../store';

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<Page path="/timetable" component={Timetable} />
			<Page path="/" component={Home} />
		</Switch>
	</Router>
);

export default AppRouter;
