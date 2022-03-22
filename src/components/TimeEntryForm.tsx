import React from "react";

const TimeEntryForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello World");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Absenden</button>
    </form>
  );
};

export default TimeEntryForm;
