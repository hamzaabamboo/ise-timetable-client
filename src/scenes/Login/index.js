import React, { Component } from 'react';
import LoginForm from './components/LoginForm';

class Login extends Component {
	render() {
		return (
			<div className="container">
				<h1>Login</h1>
				<h4>Please login with Reg Chula credentials</h4>
				<LoginForm />
			</div>
		);
	}
}

export default Login;
