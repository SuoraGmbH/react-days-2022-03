import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { configureStore as configureRtkStore } from "@reduxjs/toolkit";
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

export type ApplicationDispatch = ReturnType<typeof configureStore>["dispatch"];

export const configureStore = () => {
  return configureRtkStore({
    reducer: {
      timeEntries: timeEntriesReducer,
    },
  });
};
