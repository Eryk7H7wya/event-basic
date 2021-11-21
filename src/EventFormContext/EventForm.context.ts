import React from "react";

export interface IEventForm {
	date: string;
	location: string;
	name: string;
}

export const emptyEvent: IEventForm = {
	date: '',
	location: '',
	name: '',
}

export const EventFormContext = React.createContext(emptyEvent);