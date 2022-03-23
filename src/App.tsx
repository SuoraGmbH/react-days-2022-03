import React, { useState } from "react";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryList from "./components/TimeEntryList";
import DynamicTimeEntryList from "./components/DynamicTimeEntryList";
import useTimeEntries from "./hooks/useTimeEntries";
import TimeEntryListFromServer from "./components/TimeEntryListFromServer";

function App() {
  const { timeEntries, addTimeEntry } = useTimeEntries();

  return (
    <div>
      <DynamicTimeEntryList />
      <hr />
      <TimeEntryList timeEntries={timeEntries} />
      <TimeEntryListFromServer />
      <TimeEntryForm onNewTimeEntry={addTimeEntry} />
    </div>
  );
}

export default App;
