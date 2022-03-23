import React, { useState } from "react";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryList from "./components/TimeEntryList";
import DynamicTimeEntryList from "./components/DynamicTimeEntryList";
import useTimeEntries from "./hooks/useTimeEntries";
import TimeEntryListFromServer from "./components/TimeEntryListFromServer";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  const { timeEntries, addTimeEntry } = useTimeEntries();

  return (
    <QueryClientProvider client={queryClient}>
      <DynamicTimeEntryList />
      <hr />
      <TimeEntryList timeEntries={timeEntries} />
      <div style={{ border: "5px solid pink" }}>
        <TimeEntryListFromServer />
      </div>
      <TimeEntryForm onNewTimeEntry={addTimeEntry} />
    </QueryClientProvider>
  );
}

export default App;
