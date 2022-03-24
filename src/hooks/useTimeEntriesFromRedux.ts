import { UseTimeEntriesHookReturnValue } from "./useTimeEntries";
import { useDispatch, useSelector } from "react-redux";
import { TimeEntry } from "../domain/TimeEntry";
import { getAllTimeEntries } from "../redux/timeEntries/timeEntriesReducer";
import { addTimeEntry } from "../redux/timeEntries/action";

const useTimeEntriesFromRedux = (): UseTimeEntriesHookReturnValue => {
  const timeEntries = useSelector(getAllTimeEntries);
  const dispatch = useDispatch();

  return {
    timeEntries: timeEntries,
    addTimeEntry: (timeEntry) => {
      dispatch(addTimeEntry(timeEntry));
    },
  };
};

export default useTimeEntriesFromRedux;
