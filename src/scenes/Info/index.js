import React, { Component } from 'react';
import { getInfo } from '../../actions/info';
import { connect } from 'react-redux';

class Info extends Component {
	componentDidMount() {
		this.props.getInfo();
	}

	render() {
		let { name, major } = this.props;
		return (
			<div className="container">
				<h1>Information</h1>
				<h2>{`${name} ${major}`}</h2>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		name: state.info.name,
		major: state.info.major
	};
};

const mapDispatchToProps = {
	getInfo
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Info);
