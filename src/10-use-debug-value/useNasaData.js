import { useDebugValue, useEffect, useState } from "react";

const Status = {
  NOT_LOADED: "not-loaded",
  LOADING: "loading",
  LOADED: "loaded",
  FAILED: "failed",
};

const URL = `https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_NASA_API_KEY}&feedtype=json&ver=1.0`;

function useNasaData() {
  const [status, setStatus] = useState(Status.NOT_LOADED);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        setStatus(Status.LOADING);
        return res.json();
      })
      .then((json) => {
        setStatus(Status.LOADED);
        setLocations(json);
      })
      .catch((err) => {
        setStatus(Status.FAILED);
        console.log("Error fetching data", err);
      });
  }, []);

  useDebugValue(status, (status) => {
    const date = new Date(Date.now());
    return `${status} ${date.toISOString()}`;
  });

  return locations;
}

export default useNasaData;
