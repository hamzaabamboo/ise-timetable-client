import React, { Component } from 'react';
import Timetable from 'react-timetable-events';
import moment from 'moment';
import store from '../../store';
import { getTimetable } from '../../actions/timetable';
import { renderEvent } from '../../utils/timetable';

class TimetablePage extends Component {
	componentDidMount() {
		store.dispatch(getTimetable());
	}
	renderEvent(event, defaultAttributes, styles) {
		return (
			<div {...defaultAttributes} title={event.name} key={event.id}>
				<span className={styles.event_info}>{event.name}</span>
				<span className={styles.event_info}>{`${event.building} - ${
					event.room
				}`}</span>
				<span className={styles.event_info}>
					{event.startTime.format('HH:mm')} -{' '}
					{event.endTime.format('HH:mm')}
				</span>
			</div>
		);
	}

	render() {
		const events = {
			monday: [
				{
					id: 1,
					name: 'Probably Calculus 1',
					type: 'Lecture',
					building: 'ENG 2',
					room: '302',
					section: '1',
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
				<h1> Timetable </h1>
				<Timetable
					events={events}
					hoursInterval={[8, 18]}
					renderEvent={renderEvent}
				/>
			</div>
		);
	}
}

export default TimetablePage;
