import { TimeEntry } from "../domain/TimeEntry";
import { useEffect, useState } from "react";

interface TimeEntriesFromServerReturnValue {
  timeEntries: TimeEntry[];
}

interface TimeEntryBackend {
  id: string;
  start: string;
  end: string;
  comment: string;
}

const useTimeEntriesFromServer = (): TimeEntriesFromServerReturnValue => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();

  useEffect(() => {
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
  }, []);

  return { timeEntries: timeEntries ?? [] };
};

export default useTimeEntriesFromServer;
