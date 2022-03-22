import React from "react";
import TimeEntryView from "./components/TimeEntryView";

function App() {
  return (
    <div>
      <h1>Florian</h1>
      <TimeEntryView comment="React ist knorke." />
      <TimeEntryView comment="React ist töfte." />
    </div>
  );
}

export default App;
