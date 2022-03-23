import React, { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryForm from "./TimeEntryForm";
import TimeEntryList from "./TimeEntryList";
import useTimeEntries from "../hooks/useTimeEntries";
import useTimeEntriesFromServer from "../hooks/useTimeEntriesFromServer";

const TimeEntryListFromServer: React.FunctionComponent = () => {
  const { timeEntries } = useTimeEntriesFromServer();

  return (
    <div>
      <TimeEntryList timeEntries={timeEntries} />
    </div>
  );
};

export default TimeEntryListFromServer;
