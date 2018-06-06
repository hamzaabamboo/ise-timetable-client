import React, { Component } from 'react';
import Timetable from 'react-timetable-events';
import moment from 'moment';
import SearchArea from './components/SearchArea';
import { renderEvent } from '../../utils/timetable';
class TimetableCreate extends Component {
	render() {
		const events = {
			monday: [
				{
					id: 1,
					name: 'Probably Calculus 1',
					type: 'Lecture',
					building: 'ENG 2',
					room: '302',
					startTime: moment('2018-02-23T11:30:00'),
					endTime: moment('2018-02-23T13:30:00')
				}
			],
			tuesday: [],
			wednesday: [],
			thursday: [],
			friday: []
		};
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
					events={events}
					hoursInterval={[8, 18]}
					renderEvent={renderEvent}
				/>
			</div>
		);
	}
}

export default TimetableCreate;
