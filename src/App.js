import React, { useEffect, useState } from "react";
import MapView from "./08-use-callback/MapView";

export default function App() {
  const [nasaLocations, setNasaLocations] = useState([]);

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
