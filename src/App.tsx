import React, { useState } from "react";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryList from "./components/TimeEntryList";
import DynamicTimeEntryList from "./components/DynamicTimeEntryList";
import useTimeEntries from "./hooks/useTimeEntries";

function App() {
  const { timeEntries, addTimeEntry } = useTimeEntries();

  return (
    <div>
      <DynamicTimeEntryList />
      <hr />
      <TimeEntryList timeEntries={timeEntries} />
      <TimeEntryForm onNewTimeEntry={addTimeEntry} />
    </div>
  );
}

export default App;
