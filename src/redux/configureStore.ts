import { combineReducers, createStore } from "redux";
import { TimeEntry } from "../domain/TimeEntry";
import {
  timeEntriesReducer,
  TimeEntriesState,
} from "./timeEntries/timeEntriesReducer";
import {
  TimeEntryAddedAction,
  TimeEntryDeletedAction,
} from "./timeEntries/action";

export interface ApplicationState {
  timeEntries: TimeEntriesState;
}

interface InitAction {
  type: "@@INIT";
}

export type ApplicationAction =
  | InitAction
  | TimeEntryAddedAction
  | TimeEntryDeletedAction;

export const configureStore = () => {
  return createStore(
    combineReducers({
      timeEntries: timeEntriesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
};
