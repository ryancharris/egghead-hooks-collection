import React, { useCallback, useState } from "react";
import Map from "./Map";

function MapView({ locations }) {
  const [inputValue, setInputValue] = useState("");

  const createCoordsForMap = useCallback(() => {
    let centers = [];
    if (locations.length > 0) {
      return locations
        .filter((loc) => {
          return loc.center.toLowerCase().includes(inputValue.toLowerCase());
        })
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
    }
    return [];
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
      <Map
        locations={locations}
        inputValue={inputValue}
        createCoordsForMap={createCoordsForMap}
      />
    </div>
  );
}

export default MapView;
