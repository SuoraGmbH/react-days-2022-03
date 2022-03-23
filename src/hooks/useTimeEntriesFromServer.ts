import { TimeEntry } from "../domain/TimeEntry";
import { useEffect, useState } from "react";

interface TimeEntriesFromServerReturnValue {
  timeEntries: TimeEntry[];
}
const useTimeEntriesFromServer = (): TimeEntriesFromServerReturnValue => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();

  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then((data: TimeEntry[]) => {
        setTimeEntries(data);
      });
  }, []);

  return { timeEntries: timeEntries ?? [] };
};

export default useTimeEntriesFromServer;
