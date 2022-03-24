import { TimeEntry } from "../../domain/TimeEntry";
import { ApplicationAction, ApplicationState } from "../configureStore";

export interface ReduxTimeEntry {
  id: string;
  start: string;
  end: string;
  comment: string;
}

export interface TimeEntriesState {
  timeEntries: readonly ReduxTimeEntry[];
}

// should be cached using https://github.com/reduxjs/reselect

export const getAllTimeEntries = (state: ApplicationState): TimeEntry[] => {
  return state.timeEntries.timeEntries.map((timeEntry) => ({
    ...timeEntry,
    start: new Date(timeEntry.start),
    end: new Date(timeEntry.end),
  }));
};

const initialTimeEntriesState: TimeEntriesState = {
  timeEntries: [],
};

export const timeEntriesReducer = (
  state: TimeEntriesState = initialTimeEntriesState,
  action: ApplicationAction
): TimeEntriesState => {
  switch (action.type) {
    case "TimeEntry/Added":
      return {
        ...state,
        timeEntries: [...state.timeEntries, action.payload],
      };
  }
  console.log(action);
  return state;
};
