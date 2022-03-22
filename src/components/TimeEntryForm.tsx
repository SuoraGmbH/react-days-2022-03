import React, { useState } from "react";

const TimeEntryForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello World");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <p>{inputValue}</p>
      <button type="submit">Absenden</button>
    </form>
  );
};

export default TimeEntryForm;
