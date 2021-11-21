import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { EventForm } from './components/EventForm';
import { emptyEvent, EventFormContext } from './EventFormContext';
import { SubmittedPage } from './components/Submitted';

import './App.css';

enum EventFormRoutes {
  formPage='/',
  submittedPage='/submitted'
}

function App() {
  const [formValue, setFormValue] = React.useState(emptyEvent);
  const navigate = useNavigate();

  const formElement = (<EventForm submitFormValue={(formValue)=>{
    setFormValue(formValue);
    navigate(EventFormRoutes.submittedPage);
  }} />);

  return (
    <EventFormContext.Provider value={formValue}>
      <Routes>
        <Route path={EventFormRoutes.submittedPage} element={<SubmittedPage/>} />
        <Route path={EventFormRoutes.formPage} element={formElement} />
      </Routes>
    </EventFormContext.Provider>
  );
}

export default App;
