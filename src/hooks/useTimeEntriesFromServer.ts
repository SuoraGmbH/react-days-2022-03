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
      .then((timeEntriesBackend: TimeEntryBackend[]) => {
        const timeEntriesFrontend = timeEntriesBackend.map(
          (timeEntry): TimeEntry => {
            return {
              id: timeEntry.id,
              comment: timeEntry.comment,
              start: new Date(timeEntry.start),
              end: new Date(timeEntry.end),
            };
          }
        );
        setTimeEntries(timeEntriesFrontend);
      });
  }, []);

  return { timeEntries: timeEntries ?? [] };
};

export default useTimeEntriesFromServer;
