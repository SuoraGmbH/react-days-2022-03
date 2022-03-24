import { UseTimeEntriesHookReturnValue } from "./useTimeEntries";
import { useDispatch, useSelector } from "react-redux";
import { TimeEntry } from "../domain/TimeEntry";
import { getAllTimeEntries } from "../redux/timeEntries/timeEntriesReducer";
import {
  addTimeEntry,
  fetchTimeEntriesFromServer,
} from "../redux/timeEntries/action";
import { useEffect } from "react";

const useTimeEntriesFromRedux = (): UseTimeEntriesHookReturnValue => {
  const timeEntries = useSelector(getAllTimeEntries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTimeEntriesFromServer());
  }, [dispatch]);

  return {
    timeEntries: timeEntries,
    addTimeEntry: (timeEntry) => {
      dispatch(addTimeEntry(timeEntry));
    },
  };
};

export default useTimeEntriesFromRedux;
