import React, { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryForm from "./TimeEntryForm";
import TimeEntryList from "./TimeEntryList";
import useTimeEntries from "../hooks/useTimeEntries";
import useTimeEntriesFromServer from "../hooks/useTimeEntriesFromServer";
import useTimeEntriesFromRedux from "../hooks/useTimeEntriesFromRedux";

const DynamicTimeEntryList: React.FunctionComponent = () => {
  const { addTimeEntry, timeEntries } = useTimeEntriesFromRedux();

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
