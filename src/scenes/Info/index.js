import React, { Component } from 'react';
import { getInfo } from '../../actions/info';
import { connect } from 'react-redux';

class Info extends Component {
	componentDidMount() {
		this.props.getInfo();
	}

	render() {
		let { name, major, photo } = this.props;
		return (
			<div className="container">
				<h1>Information</h1>
				<div className="card">
					<img src={photo} alt="your pic" style={{ width: 'auto' }} />
					<p>{`Name: ${name}`}</p>
					<p className="title">{`Major: ${major}`}</p>
					<p>Chulalongkorn University</p>
					<p>
						<button>Blessing</button>
					</p>
				</div>
				<div className="card" />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		name: state.info.name,
		major: state.info.major,
		photo: state.info.photo
	};
};

const mapDispatchToProps = {
	getInfo
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Info);
