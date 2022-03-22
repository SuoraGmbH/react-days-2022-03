import React, { useState } from "react";

const TimeEntryForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
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
