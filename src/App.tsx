import React from "react";
import TimeEntryView from "./components/TimeEntryView";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Welcome city="Munich" />
      <Welcome />
      <h1>Florian</h1>
      <TimeEntryView
        timeEntry={{
          id: "dhosufnoudfsohdsajioadsio",
          comment: "München ist eine schöne Stadt!",
          start: new Date(),
          end: new Date(),
        }}
      />
    </div>
  );
}

export default App;
