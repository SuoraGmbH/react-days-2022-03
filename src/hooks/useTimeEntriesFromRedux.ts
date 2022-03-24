import { UseTimeEntriesHookReturnValue } from "./useTimeEntries";
import { useDispatch, useSelector } from "react-redux";
import {
  addTimeEntry,
  ApplicationState,
  getAllTimeEntries,
} from "../redux/configureStore";
import { TimeEntry } from "../domain/TimeEntry";

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
