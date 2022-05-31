import React from "react";
import data from "../emojipedia";
import Entry from "./Entry";

function App() {
  var hold = data.map(function (data) {
    return <Entry key={data.id} {...data} />;
  });
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{hold}</dl>
    </div>
  );
}

export default App;
