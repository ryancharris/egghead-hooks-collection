import React from "react";
import "./App.css";

import SearchInput from './04-use-ref/SearchInput'

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <p>useRef</p>
      </header>
      <main className="App__main">
        <SearchInput autoFocus={true} />
      </main>
    </div>
  );
}

export default App;
