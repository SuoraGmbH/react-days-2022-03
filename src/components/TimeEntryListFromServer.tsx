import React, { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryForm from "./TimeEntryForm";
import TimeEntryList from "./TimeEntryList";
import useTimeEntries from "../hooks/useTimeEntries";
import useTimeEntriesFromServer from "../hooks/useTimeEntriesFromServer";
import useTimeEntriesWithQuery from "../hooks/useTimeEntriesWithQuery";

const TimeEntryListFromServer: React.FunctionComponent = () => {
  const { timeEntries } = useTimeEntriesWithQuery();

  return (
    <div>
      <TimeEntryList timeEntries={timeEntries} />
    </div>
  );
};

export default TimeEntryListFromServer;
