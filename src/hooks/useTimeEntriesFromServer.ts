import { TimeEntry } from "../domain/TimeEntry";
import { useEffect, useState } from "react";
import { UseTimeEntriesHookReturnValue } from "./useTimeEntries";

interface TimeEntryBackend {
  id: string;
  start: string;
  end: string;
  comment: string;
}

const useTimeEntriesFromServer = (): UseTimeEntriesHookReturnValue => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();
  const fetchData = () => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then((timeEntriesBackend: TimeEntryBackend[]): TimeEntry[] =>
        timeEntriesBackend.map((timeEntry) => ({
          ...timeEntry,
          start: new Date(timeEntry.start),
          end: new Date(timeEntry.end),
        }))
      )
      .then(setTimeEntries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTimeEntry = (timeEntry: TimeEntry) => {
    fetch("http://localhost:3001/timeEntries", {
      method: "POST",
      body: JSON.stringify(timeEntry),
      headers: { "Content-Type": "application/json" },
    }).then(fetchData);
  };

  return { timeEntries: timeEntries ?? [], addTimeEntry };
};

export default useTimeEntriesFromServer;
