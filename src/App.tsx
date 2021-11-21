import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import { EventForm } from './components/EventForm';
import { emptyEvent, EventFormContext } from './EventFormContext';
import { SubmittedPage } from './components/Submitted';

import './App.css';

enum EventFormRoutes {
  form='/',
  submitted='/submitted'
}

function App() {
  const [formValue, setFormValue] = React.useState(emptyEvent);
  const navigate = useNavigate()

  const formElement = (<EventForm submitFormValue={(v)=>{
    setFormValue(v);
    navigate(EventFormRoutes.submitted)
  }} />);

  const submittedPageElement = (<SubmittedPage/>)

  return (
    <EventFormContext.Provider value={formValue}>
      <Routes>
        <Route path={EventFormRoutes.submitted} element={submittedPageElement} />
        <Route path={EventFormRoutes.form} element={formElement} />
      </Routes>
    </EventFormContext.Provider>
  );
}

export default App;
