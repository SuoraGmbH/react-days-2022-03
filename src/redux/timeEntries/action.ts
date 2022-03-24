import { TimeEntry } from "../../domain/TimeEntry";
import { ReduxTimeEntry } from "./timeEntriesReducer";
import { Dispatch } from "redux";
import { ApplicationAction, ApplicationDispatch } from "../configureStore";

export const addTimeEntry =
  (timeEntry: TimeEntry) => (dispatch: ApplicationDispatch) => {
    dispatch({
      type: "TimeEntry/Added",
      payload: {
        ...timeEntry,
        start: timeEntry.start.toISOString(),
        end: timeEntry.end.toISOString(),
      },
    });

    fetch("http://localhost:3001/timeEntries", {
      method: "POST",
      body: JSON.stringify(timeEntry),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      dispatch(fetchTimeEntriesFromServer());
    });
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

export const fetchTimeEntriesFromServer =
  () => (dispatch: Dispatch<ApplicationAction>) => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then((timeEntriesBackend: ReduxTimeEntry[]) => {
        dispatch({
          type: "TimeEntry/FetchedFromServer",
          payload: timeEntriesBackend,
        });
      });
  };

interface TimeEntryAddedAction {
  type: "TimeEntry/Added";
  payload: ReduxTimeEntry;
}

interface TimeEntryFetchedFromServerAction {
  type: "TimeEntry/FetchedFromServer";
  payload: ReduxTimeEntry[];
}

interface TimeEntryDeletedAction {
  type: "TimeEntry/Deleted";
  payload: ReduxTimeEntry;
}

export type TimeEntryAction =
  | TimeEntryDeletedAction
  | TimeEntryAddedAction
  | TimeEntryFetchedFromServerAction;
