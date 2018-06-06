import React, { Component } from 'react';
import { TextField } from 'rmwc/TextField';
import { Button } from 'rmwc/Button';
import { Grid, GridCell } from 'rmwc/Grid';
import { login } from '../../../actions/auth';
import { connect } from 'react-redux';

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
						<TextField
							onChange={e =>
								this.setState({ username: e.target.value })
							}
							value={this.state.username}
							label="Student ID"
							fullwidth
						/>
					</GridCell>
				</Grid>
				<Grid>
					<GridCell span="8">
						<TextField
							type="password"
							onChange={e =>
								this.setState({ password: e.target.value })
							}
							value={this.state.password}
							label="Password"
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
