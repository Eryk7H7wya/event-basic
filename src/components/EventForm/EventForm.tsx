import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';

import { EventFormContext, IEventForm } from '../../EventFormContext';
import { formatDate } from '../../lib/formatters/date';

import 'react-datepicker/dist/react-datepicker.css';

interface IEventFormProps {
	submitFormValue: (eventForm:IEventForm) => void;
}

export const EventForm = ({submitFormValue}: IEventFormProps) => {
	const initialFormValue = React.useContext(EventFormContext);

	const { register, handleSubmit, formState: { errors }, control } = useForm<IEventForm>();

	return (
		<form
			onSubmit={handleSubmit((value)=>{
				submitFormValue(value);
			})}
		>
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
				{errors.location && <div>Address is required.</div>}
			</div>
			<div>
				<label>Date</label>
				<Controller
					name="date"
					control={control}
					rules={{required: true}}
					defaultValue={initialFormValue.date}
					render={({ field }) => {
						return (
							<DatePicker
								{...field}
								value={formatDate(field.value)}
								autoComplete="off"
							/>)
					}}
				/>
				{errors.date && <div>Date is required.</div>}
			</div>
			<button type="submit">Submit</button>
		</form>
	);
} 
