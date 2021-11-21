import React from 'react';

import { EventFormContext } from '../../EventFormContext';

export const SubmittedPage = () => {
	const event = React.useContext(EventFormContext);

	return (<div>
		<div>Event name: {event.name}</div>
		<div>Date: {event.date?.toString()}</div>
		<div>Address: {event.location}</div>
	</div>)
}