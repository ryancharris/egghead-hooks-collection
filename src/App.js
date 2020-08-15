import React, { useEffect, useState } from "react";
import "./App.css";

import WeatherDisplay from "./02-use-effect/WeatherDisplay";
import { fetchDataFromAPI, parseDataForDay } from "./02-use-effect/utils";

function App() {
  const [day, setDay] = useState("today");
  const [data, setData] = useState(null);
  const [dayData, setDayData] = useState(null);

  useEffect(() => {
    document.title = `${new Date().toLocaleString()} on Mars`;
  });

  useEffect(() => {
    const apiData = fetchDataFromAPI();

    apiData
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err);
        setData(null);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const dataForDay = parseDataForDay(data);
      setDayData(data[dataForDay]);
    }
  }, [day, data]);

  return (
    <div className="App">
      <header className="App__header">
        <p>useEffect</p>
      </header>
      <main className="App__content">
        <WeatherDisplay day={day} setDay={setDay} dayData={dayData} />
      </main>
    </div>
  );
}

export default App;
