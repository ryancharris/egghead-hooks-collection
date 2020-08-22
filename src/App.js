import React, { useEffect, useState } from "react";
import MapView from "./07-use-memo/MapView";

export default function App() {
  const [nasaLocations, setNasaLocations] = useState([]);

  // Returns an array of 484 results from the NASA API
  useEffect(() => {
    fetch("https://data.nasa.gov/resource/gvk9-iz74.json")
      .then((res) => res.json())
      .then((json) => {
        setNasaLocations(json);
      })
      .catch((err) => console.log("Error fetching data", err));
  }, []);

  return (
    <div className="App">
      <main>
        <MapView locations={nasaLocations} />
      </main>
    </div>
  );
}
