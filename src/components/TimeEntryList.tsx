import React from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";

const timeEntries: TimeEntry[] = [
  {
    id: "asidjasdj2",
    start: new Date(),
    end: new Date(),
    comment: "React Days",
  },
  {
    id: "efc3220e-0d0c-4047-92ed-4bbe8c4e2231",
    start: new Date(),
    end: new Date(),
    comment: "Angular Days",
  },
  {
    id: "efc3220e-0d0c-4047-92ed-4bbe8c4e2761",
    start: new Date(),
    end: new Date(),
    comment: "JS Days",
  },
];

const TimeEntryList: React.FunctionComponent = () => {
  return (
    <>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView timeEntry={timeEntry} key={timeEntry.id} />
      ))}
    </>
  );
};

export default TimeEntryList;
