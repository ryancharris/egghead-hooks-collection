import React from "react";
import useNasaData from "./10-use-debug-value/useNasaData";

export default function App() {
  const nasaData = useNasaData();
  console.log(nasaData);

  return <div className="App"></div>;
}
