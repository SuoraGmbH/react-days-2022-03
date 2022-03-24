import { TimeEntry } from "../../domain/TimeEntry";
import { ReduxTimeEntry } from "./timeEntriesReducer";

export const addTimeEntry = (timeEntry: TimeEntry): TimeEntryAddedAction => {
  return {
    type: "TimeEntry/Added",
    payload: {
      ...timeEntry,
      start: timeEntry.start.toISOString(),
      end: timeEntry.end.toISOString(),
    },
  };
};

export const addTimeEntryForNow = (comment: string): TimeEntryAddedAction => {
  return {
    type: "TimeEntry/Added",
    payload: {
      id: new Date().toISOString(),
      start: new Date().toISOString(),
      end: new Date().toISOString(),
      comment,
    },
  };
};

export interface TimeEntryAddedAction {
  type: "TimeEntry/Added";
  payload: ReduxTimeEntry;
}

export interface TimeEntryDeletedAction {
  type: "TimeEntry/Deleted";
  payload: ReduxTimeEntry;
}
