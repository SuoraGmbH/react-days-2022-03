import React, { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryForm from "./TimeEntryForm";
import TimeEntryList from "./TimeEntryList";
import useTimeEntries from "../hooks/useTimeEntries";

const DynamicTimeEntryList: React.FunctionComponent = () => {
  const { addTimeEntry, timeEntries } = useTimeEntries([
    {
      id: "!213",
      start: new Date(),
      end: new Date(),
      comment: "initial time entry",
    },
  ]);

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
