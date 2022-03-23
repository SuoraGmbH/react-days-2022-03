import React, { useState } from "react";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryList from "./components/TimeEntryList";

function App() {
  const [timeEntries, setTimeEntries] = useState<readonly TimeEntry[]>([]);

  const handleNewTimeEntry = (timeEntry: TimeEntry) => {
    setTimeEntries((prevTimeEntries) => [...prevTimeEntries, timeEntry]);
  };

  return (
    <div>
      <TimeEntryList timeEntries={timeEntries} />
      <TimeEntryForm onNewTimeEntry={handleNewTimeEntry} />
    </div>
  );
}

export default App;
