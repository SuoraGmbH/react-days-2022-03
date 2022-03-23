import { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";

const useTimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<readonly TimeEntry[]>([]);

  const addTimeEntry = (timeEntry: TimeEntry) => {
    setTimeEntries((prevTimeEntries) => [...prevTimeEntries, timeEntry]);
  };

  return {
    timeEntries,
    addTimeEntry,
  };
};

export default useTimeEntries;
