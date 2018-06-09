import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidenav from '../components/Sidenav';
import Message from '../components/Message';

export const Page = props => {
	let { component: Component, ...rest } = props;
	console.log(...rest);
	return (
		<Route
			{...rest}
			component={props => (
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
			)}
		/>
	);
};

export default Page;
