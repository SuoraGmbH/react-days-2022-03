import { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";

export interface UseTimeEntriesHookReturnValue {
  timeEntries: readonly TimeEntry[];
  addTimeEntry: (timeEntry: TimeEntry) => void;
}

const useTimeEntries = (
  initialState: readonly TimeEntry[] = []
): UseTimeEntriesHookReturnValue => {
  const [timeEntries, setTimeEntries] =
    useState<readonly TimeEntry[]>(initialState);

  const addTimeEntry = (timeEntry: TimeEntry) => {
    setTimeEntries((prevTimeEntries) => [...prevTimeEntries, timeEntry]);
  };

  const addTimeEntries = (timeEntries: TimeEntry[]) => {
    setTimeEntries((prevTimeEntries) => [...prevTimeEntries, ...timeEntries]);
  };

  return {
    timeEntries,
    addTimeEntry,
  };
};

export default useTimeEntries;
