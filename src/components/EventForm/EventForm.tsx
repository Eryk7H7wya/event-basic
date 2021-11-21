import React from 'react'; // we need this to make JSX compile

import { EventFormContext } from '../../EventFormContext';

export const EventForm = () => {

	const formValue = React.useContext(EventFormContext)
	return (<form>
		<div>
			<label>Event name</label>
			<input type="text" value={formValue.name}></input>
		</div>
		<div>
			<label>Address</label>
			<input type="text" value={formValue.location}></input>
		</div>
		<div>
			<label>Date</label>
			<input type="text" value={formValue.date}></input>
		</div>
		<button type="submit">Submit</button>
	</form>);
} 