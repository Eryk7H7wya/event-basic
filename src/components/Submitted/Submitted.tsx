import React from 'react';

import { EventFormContext } from '../../EventFormContext';
import { formatDate } from '../../lib/formatters/date';

export const SubmittedPage = () => {
	const event = React.useContext(EventFormContext);

	return (<div>
		<div>Event name: {event.name}</div>
		<div>Date: {formatDate(event.date)}</div>
		<div>Address: {event.location}</div>
	</div>)
}