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
    setTimeEntries([...timeEntries, timeEntry]);
  };

  const timeEntry: TimeEntry = {
    id: "dhosufnoudfsohdsajioadsio",
    comment: "München ist eine schöne Stadt!",
    start: new Date(),
    end: new Date(),
  };

  return (
    <div>
      <TimeEntryList />
      <hr />
      <DynamicGithubStats />
      <GithubStats repoName="facebook/react" />
      <GithubStats repoName="angular/angular" />
      <Counter />
      <TimeEntryForm onNewTimeEntry={handleNewTimeEntry} />
      <TimeEntryView timeEntry={timeEntry} />
    </div>
  );
}

export default App;
