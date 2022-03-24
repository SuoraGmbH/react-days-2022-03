import { combineReducers, createStore } from "redux";
import { TimeEntry } from "../domain/TimeEntry";

interface ReduxTimeEntry {
  id: string;
  start: string;
  end: string;
  comment: string;
}

export interface ApplicationState {
  timeEntries: TimeEntriesState;
}

export interface TimeEntriesState {
  timeEntries: readonly ReduxTimeEntry[];
}
const initialTimeEntriesState: TimeEntriesState = {
  timeEntries: [],
};

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

interface TimeEntryAddedAction {
  type: "TimeEntry/Added";
  payload: ReduxTimeEntry;
}

interface TimeEntryDeletedAction {
  type: "TimeEntry/Deleted";
  payload: ReduxTimeEntry;
}

interface InitAction {
  type: "@@INIT";
}

type ApplicationAction =
  | InitAction
  | TimeEntryAddedAction
  | TimeEntryDeletedAction;

// should be cached using https://github.com/reduxjs/reselect
export const getAllTimeEntries = (state: ApplicationState): TimeEntry[] => {
  return state.timeEntries.timeEntries.map((timeEntry) => ({
    ...timeEntry,
    start: new Date(timeEntry.start),
    end: new Date(timeEntry.end),
  }));
};

const timeEntriesReducer = (
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

export const configureStore = () => {
  return createStore(
    combineReducers({
      timeEntries: timeEntriesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
};
