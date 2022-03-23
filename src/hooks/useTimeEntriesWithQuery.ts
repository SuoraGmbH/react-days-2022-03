import { useQuery } from "react-query";
import { TimeEntry } from "../domain/TimeEntry";
interface TimeEntryBackend {
  id: string;
  start: string;
  end: string;
  comment: string;
}

const useTimeEntriesWithQuery = () => {
  const { data } = useQuery(
    "timeEntries",
    () => {
      return fetch("http://localhost:3001/timeEntries")
        .then((response) => response.json())
        .then((timeEntriesBackend: TimeEntryBackend[]): TimeEntry[] =>
          timeEntriesBackend.map((timeEntry) => ({
            ...timeEntry,
            start: new Date(timeEntry.start),
            end: new Date(timeEntry.end),
          }))
        );
    },
    { refetchInterval: 5000 }
  );

  return { timeEntries: data ?? [] };
};

export default useTimeEntriesWithQuery;
