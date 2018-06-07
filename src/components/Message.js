import React from 'react';
import { Snackbar } from 'rmwc/Snackbar';
import { connect } from 'react-redux';
import { hide } from '../actions/message';
class Message extends React.Component {
	render() {
		let { show, message, hide } = this.props;
		return (
			<Snackbar
				show={show}
				onHide={e => hide()}
				message={message}
				actionText="Close"
				actionHandler={() => {}}
			/>
		);
	}
}
const mapStateToProps = state => ({
	show: state.message.show,
	message: state.message.message
});
const mapDispatchToProps = {
	hide
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Message);
