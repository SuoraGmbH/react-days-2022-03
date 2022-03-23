import { TimeEntry } from "../domain/TimeEntry";
import React from "react";

interface Props {
  timeEntry: TimeEntry;
}

const TimeEntryView: React.FunctionComponent<Props> = ({ timeEntry }) => {
  return (
    <div className="time-entry-view">
      {timeEntry.comment} ({timeEntry.start.toLocaleTimeString()}-
      {timeEntry.end.toLocaleTimeString()})
    </div>
  );
};

export default TimeEntryView;
