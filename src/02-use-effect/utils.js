import axios from "axios";

export function fetchDataFromAPI() {
  const API_KEY = "IxgbhBFnNz0zYNdZOikZB3iphQDiZV6nEIWRlCJR";
  const URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        // Remove unused fields from response data and set to component state
        const weatherData = res.data;
        delete weatherData.sol_keys;
        delete weatherData.validity_checks;
        return weatherData;
      } else {
        throw new Error("Error connecting with Mars...");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function parseDataForDay(data, day) {
  const keysArr = Object.keys(data);
  const dayKey = day === "today" ? keysArr.slice(-1)[0] : keysArr.slice(-2)[0];

  return dayKey;
}
