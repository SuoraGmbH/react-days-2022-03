import React from "react";
import TimeEntryView from "./components/TimeEntryView";
import Welcome from "./components/Welcome";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";

function App() {
  const timeEntry: TimeEntry = {
    id: "dhosufnoudfsohdsajioadsio",
    comment: "München ist eine schöne Stadt!",
    start: new Date(),
    end: new Date(),
  };

  return (
    <div>
      <TimeEntryForm />
      <TimeEntryView timeEntry={timeEntry} />
    </div>
  );
}

export default App;
