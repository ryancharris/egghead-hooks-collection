import React, { useMemo, useState } from "react";

import Map from "./Map";

function MapView({ locations }) {
  const [coordData, setCoordData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useMemo(() => {
    if (locations.length > 0) {
      let centers = [];
      const data = locations
        .filter((loc) =>
          loc.center.toLowerCase().includes(inputValue.toLowerCase())
        )
        .filter((loc) => {
          if (!centers.includes(loc.center)) {
            centers.push(loc.center);
            return loc;
          }
          return false;
        })
        .map((loc) => {
          return {
            name: loc.center,
            coordinates: [loc.location.longitude, loc.location.latitude],
            markerOffset: 22,
          };
        });
      setCoordData(data);
    }
  }, [locations, inputValue]);

  return (
    <div className="MapView">
      <div className="MapView__input">
        <label
          htmlFor="search"
          style={{
            display: "block",
          }}
        >
          Search for location:
        </label>
        <input
          name="search"
          type="search"
          onChange={(event) => setInputValue(event.currentTarget.value)}
        />
      </div>
      <Map coords={coordData} />
    </div>
  );
}

export default MapView;
