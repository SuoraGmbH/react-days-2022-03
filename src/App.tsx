import React, { useState } from "react";
import TimeEntryView from "./components/TimeEntryView";
import Welcome from "./components/Welcome";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import Counter from "./components/Counter";
import GithubStats from "./components/GithubStats";
import DynamicGithubStats from "./components/DynamicGithubStats";
import TimeEntryList from "./components/TimeEntryList";

function App() {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

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
