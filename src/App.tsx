import React from 'react';

import { EventForm } from './components/EventForm';
import { emptyEvent, EventFormContext } from './EventFormContext';

import './App.css';

function App() {
  return (
    <EventFormContext.Provider value={emptyEvent}>
      <EventForm />
    </EventFormContext.Provider>
  );
}

export default App;
