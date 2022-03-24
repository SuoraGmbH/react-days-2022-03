import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import {
  timeEntriesReducer,
  TimeEntriesState,
} from "./timeEntries/timeEntriesReducer";
import { TimeEntryAction } from "./timeEntries/action";
import thunk from "redux-thunk";

export interface ApplicationState {
  timeEntries: TimeEntriesState;
}

interface InitAction {
  type: "@@INIT";
}

export type ApplicationAction = InitAction | TimeEntryAction;

export const configureStore = () => {
  return createStore(
    combineReducers({
      timeEntries: timeEntriesReducer,
    }),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
      applyMiddleware(thunk)
    )
  );
};
