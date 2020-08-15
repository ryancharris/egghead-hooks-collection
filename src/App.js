import React from "react";
import "./App.css";

import Modals from "./03-use-layout-effect/Modals";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <p>useLayoutEffect</p>
      </header>
      <main className="App__main">
        <Modals />
      </main>
    </div>
  );
}

export default App;
