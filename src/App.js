import React from "react";
import "./App.css";

import Circles from "./03-use-layout-effect/Circles";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <p>useLayoutEffect</p>
      </header>
      <main className="App__main">
        <Circles />
      </main>
    </div>
  );
}

export default App;
