import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function Map({ coords }) {
  return (
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
      {coords.map(({ name, coordinates, markerOffset }) => (
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
  );
}

export default Map;
