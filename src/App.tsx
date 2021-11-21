import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";


import { EventForm } from './components/EventForm';
import { emptyEvent, EventFormContext } from './EventFormContext';

import './App.css';

enum EventFormRoutes {
  form='/',
  submitted='/submitted'
}

function App() {
  const [formValue, setFormValue] = React.useState(emptyEvent);
  const history = createBrowserHistory()

  const formElement = <EventForm submitFormValue={(v)=>{
    setFormValue(v);
    history.push(EventFormRoutes.submitted)
  }} />

  return (
    <BrowserRouter>
      <EventFormContext.Provider value={formValue}>
        <Routes>
          <Route path={EventFormRoutes.form} element={formElement} />
        </Routes>
      </EventFormContext.Provider>
    </BrowserRouter>
  );
}

export default App;
