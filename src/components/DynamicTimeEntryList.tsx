import React from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryForm from "./TimeEntryForm";
import TimeEntryList from "./TimeEntryList";

const DynamicTimeEntryList: React.FunctionComponent = () => {
  const { timeEntries, addTimeEntry } = useTimeEntries();

  const handleNewTimeEntry = (timeEntry: TimeEntry) => {
    addTimeEntry(timeEntry);
  };

  return (
    <div>
      <TimeEntryList timeEntries={timeEntries} />
      <TimeEntryForm onNewTimeEntry={handleNewTimeEntry} />
    </div>
  );
};

export default DynamicTimeEntryList;
