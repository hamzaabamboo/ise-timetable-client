import React, { Component } from 'react';
import { TextField } from 'rmwc/TextField';
import { search } from '../../../actions/timetable';
import { connect } from 'react-redux';
import { Button } from 'rmwc/Button';

const label = {
	marginBottom: 0
};
class SearchArea extends Component {
	state = {
		query: ''
	};
	render() {
		return (
			<React.Fragment>
				<h4 style={label}>Search Subjects</h4>
				<TextField
					type="text"
					onChange={e => this.setState({ query: e.target.value })}
					value={this.state.query}
					fullwidth
				/>
				<br />
				<Button
					raised
					onClick={() => this.props.search(this.state.query)}
				>
					Login
				</Button>
				<br />
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	search
};
export default connect(
	null,
	mapDispatchToProps
)(SearchArea);
