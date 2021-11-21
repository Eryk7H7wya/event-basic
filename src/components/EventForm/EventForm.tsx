import React from 'react';

import { EventFormContext, IEventForm } from '../../EventFormContext';

interface IEventFormProps {
	submitFormValue: (eventForm:IEventForm) => void;
}

export const EventForm = ({submitFormValue}: IEventFormProps) => {
	const [formValue, setFormValue]= React.useState(React.useContext(EventFormContext)) 

	return (<form onSubmit={()=>{
		submitFormValue(formValue)
	}}>
		<div>
			<label>Event name</label>
			<input type="text" value={formValue.name} onChange={(e)=>setFormValue({...formValue, name: e.target.value})}></input>
		</div>
		<div>
			<label>Address</label>
			<input type="text" value={formValue.location} onChange={(e)=>setFormValue({...formValue, location: e.target.value})}></input>
		</div>
		<div>
			<label>Date</label>
			<input type="text" value={formValue.date} onChange={(e)=>setFormValue({...formValue, date: e.target.value})}></input>
		</div>
		<button type="submit">Submit</button>
	</form>);
} 