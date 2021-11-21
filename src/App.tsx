import React from 'react';

import { EventForm } from './components/EventForm';
import { emptyEvent, EventFormContext } from './EventFormContext';

import './App.css';

function App() {
  const [formValue, setFormValue] = React.useState(emptyEvent);

  return (
    <EventFormContext.Provider value={formValue}>
      <EventForm submitFormValue={(v)=>{
        setFormValue(v);
      }} />
    </EventFormContext.Provider>
  );
}

export default App;
