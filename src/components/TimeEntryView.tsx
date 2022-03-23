import { TimeEntry } from "../domain/TimeEntry";

interface Props {
  timeEntry: TimeEntry;
}

const TimeEntryView = ({ timeEntry }: Props) => {
  return (
    <div className="time-entry-view">
      {timeEntry.comment} ({timeEntry.start.toLocaleTimeString()}-
      {timeEntry.end.toLocaleTimeString()})
    </div>
  );
};

export default TimeEntryView;
