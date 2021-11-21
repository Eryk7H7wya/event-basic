import React from "react";

interface EventForm {
	date: string;
	location: string;
	name: string;
}

export const emptyEvent: EventForm = {
	date: '',
	location: '',
	name: '',
}

export const EventFormContext = React.createContext(emptyEvent);