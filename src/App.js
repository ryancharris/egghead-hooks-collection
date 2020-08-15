import React from "react";
import "./App.css";

import Cart from "./01-use-state/Cart";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <p>useState</p>
      </header>
      <main>
        <Cart />
      </main>
    </div>
  );
}

export default App;
