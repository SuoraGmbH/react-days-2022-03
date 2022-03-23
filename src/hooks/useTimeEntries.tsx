import { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";

export interface UseTimeEntriesHookReturnValue {
  timeEntries: readonly TimeEntry[];
  addTimeEntry: (timeEntry: TimeEntry) => void;
}

const useTimeEntries = (): UseTimeEntriesHookReturnValue => {
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
