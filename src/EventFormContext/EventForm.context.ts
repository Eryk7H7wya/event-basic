import React from 'react';

export interface IEventForm {
	date?: Date;
	location: string;
	name: string;
}

export const emptyEvent: IEventForm = {
	date: undefined,
	location: '',
	name: '',
}

export const EventFormContext = React.createContext(emptyEvent);