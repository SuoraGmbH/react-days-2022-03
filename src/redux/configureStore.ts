import { combineReducers, createStore } from "redux";
import { TimeEntry } from "../domain/TimeEntry";

export interface ApplicationState {
  timeEntries: TimeEntriesState;
}

export interface TimeEntriesState {
  timeEntries: readonly TimeEntry[];
}
const initialTimeEntriesState: TimeEntriesState = {
  timeEntries: [],
};

export const addTimeEntry = (timeEntry: TimeEntry): TimeEntryAddedAction => {
  return {
    type: "TimeEntry/Added",
    payload: timeEntry,
  };
};

export const addTimeEntryForNow = (comment: string): TimeEntryAddedAction => {
  return {
    type: "TimeEntry/Added",
    payload: {
      id: new Date().toISOString(),
      start: new Date(),
      end: new Date(),
      comment,
    },
  };
};

interface TimeEntryAddedAction {
  type: "TimeEntry/Added";
  payload: TimeEntry;
}

interface TimeEntryDeletedAction {
  type: "TimeEntry/Deleted";
  payload: TimeEntry;
}

interface InitAction {
  type: "@@INIT";
}

type ApplicationAction =
  | InitAction
  | TimeEntryAddedAction
  | TimeEntryDeletedAction;

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
