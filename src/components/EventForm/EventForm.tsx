import React from 'react';

import { EventFormContext, IEventForm } from '../../EventFormContext';

interface IEventFormProps {
	submitFormValue: (eventForm:IEventForm) => void;
}

export const EventForm = ({submitFormValue}: IEventFormProps) => {
	const [formValue, setFormValue]= React.useState(React.useContext(EventFormContext)) 

	return (<form onSubmit={(e)=>{
		submitFormValue(formValue);
		e.preventDefault();
	}}>
		<div>
			<label>Event name</label>
			<input 
				onChange={(e)=>setFormValue({...formValue, name: e.target.value})}
				required
				type="text" 
				value={formValue.name} 
				/>
		</div>
		<div>
			<label>Address</label>
			<input 
				onChange={(e)=>setFormValue({...formValue, location: e.target.value})}
				required
				type="text" 
				value={formValue.location} 
			/>
		</div>
		<div>
			<label>Date</label>
			<input 
				onChange={(e)=>setFormValue({...formValue, date: e.target.value})}
				required
				type="text" 
				value={formValue.date} 
			/>
		</div>
		<button type="submit">Submit</button>
	</form>);
} 