import React, { useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

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
        .map((loc, index) => {
          console.log(loc);
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

      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [92, -38, 0],
          scale: 900,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((d) => d.properties.REGION_UN === "Americas")
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                />
              ))
          }
        </Geographies>
        {coordData.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#F00" stroke="#fff" strokeWidth={3} />
            <text
              textAnchor="start"
              y={markerOffset}
              style={{
                fontFamily: "system-ui",
                fill: "#5D5A6D",
                fontSize: 12,
                transform: "rotate(20deg)",
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

export default MapView;
