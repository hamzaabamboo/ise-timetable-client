import React from 'react';

export const renderEvent = (event, defaultAttributes, styles) => (
	<div
		{...defaultAttributes}
		title={event.name}
		key={`${event.id}-${event.section}-${event.no}`}
	>
		<span className={styles.event_info}>{event.name}</span>
		<span className={styles.event_info}>Section : {event.section}</span>
		<span className={styles.event_info}>{`${event.building} - ${
			event.room
		}`}</span>
		<span className={styles.event_info}>
			{event.startTime.format('HH:mm')} - {event.endTime.format('HH:mm')}
		</span>
	</div>
);
