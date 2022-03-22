import React from "react";
import TimeEntryView from "./components/TimeEntryView";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Welcome city="Munich" />
      <Welcome />
      <h1>Florian</h1>
      <TimeEntryView comment="React ist knorke." />
      <TimeEntryView comment="React ist töfte." />
    </div>
  );
}

export default App;
