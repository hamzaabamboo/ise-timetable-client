import React, { Component } from 'react';
import { TextField } from 'rmwc/TextField';
import { Button } from 'rmwc/Button';
import { Grid, GridCell } from 'rmwc/Grid';
import { login } from '../../../actions/auth';
import { connect } from 'react-redux';

const label = {
	marginBottom: 0
};
class LoginForm extends Component {
	state = {
		username: '',
		password: ''
	};
	render() {
		return (
			<React.Fragment>
				<Grid>
					<GridCell span="8">
						<h4 style={label}>Student ID</h4>
						<TextField
							onChange={e =>
								this.setState({ username: e.target.value })
							}
							value={this.state.username}
							fullwidth
						/>
					</GridCell>
				</Grid>
				<Grid>
					<GridCell span="8">
						<h4 style={label}>Password</h4>
						<TextField
							type="password"
							onChange={e =>
								this.setState({ password: e.target.value })
							}
							value={this.state.password}
							fullwidth
						/>
					</GridCell>
				</Grid>
				<Grid>
					<GridCell span="4">
						<Button
							raised
							onClick={() =>
								this.props.login(
									this.state.username,
									this.state.password
								)
							}
						>
							Login
						</Button>
					</GridCell>
				</Grid>
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	login
};
export default connect(
	null,
	mapDispatchToProps
)(LoginForm);
