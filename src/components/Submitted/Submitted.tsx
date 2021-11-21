import React from 'react';

import { EventFormContext } from '../../EventFormContext';

export const SubmittedPage = () => {
	const event = React.useContext(EventFormContext);

	return (<div>
		<div>{event.date}</div>
		<div>{event.location}</div>
		<div>{event.name}</div>
	</div>)
}