import React, { Component } from 'react';
import Timetable from 'react-timetable-events';
import { connect } from 'react-redux';
import SearchArea from './components/SearchArea';
import { renderEvent } from '../../utils/timetable';
class TimetableCreate extends Component {
	render() {
		console.log(this.props.events);
		return (
			<div className="container">
				<h1>Create Timetable</h1>
				<p>
					Note: This timetable creator can only guide you to create
					your own timetable. Please do the submission on your own in
					www2.reg.chula.ac.th
				</p>
				<SearchArea />
				<br />
				<Timetable
					events={this.props.events}
					hoursInterval={[8, 18]}
					renderEvent={renderEvent}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	events: state.timetable.createEvent
});

export default connect(mapStateToProps)(TimetableCreate);
