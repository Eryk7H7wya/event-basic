import React from 'react';
import { useForm } from 'react-hook-form';

import { EventFormContext, IEventForm } from '../../EventFormContext';

interface IEventFormProps {
	submitFormValue: (eventForm:IEventForm) => void;
}

export const EventForm = ({submitFormValue}: IEventFormProps) => {
	const initialFormValue = React.useContext(EventFormContext);

	const { register, handleSubmit, formState: { errors } } = useForm();

	return (<form onSubmit={handleSubmit((value)=>{
		submitFormValue(initialFormValue);
	})}>
		<div>
			<label>Event name</label>
			<input 
				defaultValue={initialFormValue.name}
				{...register('name', {required: true})}
			/>
			{errors.name && <div>Event name is required.</div>}
		</div>
		<div>
			<label>Address</label>
			<input 
				defaultValue={initialFormValue.location}
				{...register('location', {required: true})}
			/>
			{errors.address && <div>Address is required.</div>}
		</div>
		<div>
			<label>Date</label>
			<input 
				defaultValue={initialFormValue.date}
				{...register('date', {required: true})}
			/>
			{errors.date && <div>Date is required.</div>}
		</div>
		<button type="submit">Submit</button>
	</form>);
} 
