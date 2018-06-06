import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import Home from '../scenes/Home';
import Timetable from '../scenes/Timetable';
import Info from '../scenes/Info';
import Login from '../scenes/Login';
import Page from './Page';
import PrivatePage from './PrivatePage';
import { history } from '../store';

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<PrivatePage path="/info" component={Info} />
			<PrivatePage path="/timetable" component={Timetable} />
			<Page path="/login" component={Login} />
			<Page path="/" component={Home} />
		</Switch>
	</Router>
);

export default AppRouter;
