import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Sidenav from '../components/Sidenav';
import Message from '../components/Message';

export const Page = props => {
	let { isLoggedIn, component: Component, ...rest } = props;
	console.log(...rest);
	return (
		<Route
			{...rest}
			component={props =>
				isLoggedIn ? (
					<React.Fragment>
						<Navbar />
						<div className="main">
							<Sidenav />
							<div className="content">
								<Component {...props} />
							</div>
						</div>
						<Message />
					</React.Fragment>
				) : (
					<Redirect exact to="/login" />
				)
			}
		/>
	);
};

const mapStateToProps = state => ({
	isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(Page);
