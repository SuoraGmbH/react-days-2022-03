import React, { useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";

interface Props {
  onNewTimeEntry?: (timeEntry: TimeEntry) => void;
}

const TimeEntryForm: React.FunctionComponent<Props> = ({ onNewTimeEntry }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onNewTimeEntry) {
      onNewTimeEntry({
        id: new Date().toISOString(),
        start: new Date(),
        end: new Date(),
        comment: inputValue,
      });
    }
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        value={inputValue}
      />
      <p>{inputValue}</p>
      <button type="submit">Absenden</button>
    </form>
  );
};

export default TimeEntryForm;
