import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		let { isLoggedIn, name } = this.props;
		return (
			<div className="container">
				<h1>Hello {!isLoggedIn ? 'world' : '! ' + name}</h1>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		name: state.auth.name,
		isLoggedIn: state.auth.isLoggedIn
	};
};

export default connect(mapStateToProps)(Home);
