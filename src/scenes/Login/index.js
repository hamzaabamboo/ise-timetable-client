import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import { connect } from 'react-redux';
import store from '../../store';
import { push } from 'react-router-redux';
class Login extends Component {
	componentDidMount() {
		if (this.props.isLoggedIn) store.dispatch(push('/'));
	}
	render() {
		return (
			<div className="container">
				<h1>Login</h1>
				<p>
					Please login with Reg Chula credentials. Student ID and
					password are not sent to/kept in the server.
				</p>
				<LoginForm />
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

export default connect(mapStateToProps)(Login);
