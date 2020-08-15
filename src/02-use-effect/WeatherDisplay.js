import React from "react";
import PropTypes from "prop-types";

function WeatherDisplay({ setDay, dayData, day }) {
  return dayData ? (
    <div className="WeatherDisplay">
      <ul>
        <li>
          <button
            className={day === "today" ? "active" : null}
            onClick={() => setDay("today")}
          >
            Today
          </button>
        </li>
        <li>
          <button
            className={day === "yesterday" ? "active" : null}
            onClick={() => setDay("yesterday")}
          >
            Yesterday
          </button>
        </li>
      </ul>
      <div>
        <p>
          <strong>Initial contact:</strong>{" "}
        </p>
        <p>{new Date(dayData.First_UTC).toUTCString()}</p>
        <p>
          <strong>Last contact:</strong>{" "}
        </p>
        <p>{new Date(dayData.Last_UTC).toUTCString()}</p>
      </div>
      <div>
        <p>
          <strong>Temperature Readings</strong>
        </p>
        <ul className="WeatherDisplay__data-row">
          <li>
            <span>Min.</span> {dayData.AT.mn.toFixed(2)}&#176; F
          </li>
          <li>
            <span>Avg.</span> {dayData.AT.av.toFixed(2)}&#176; F
          </li>
          <li>
            <span>Max</span> {dayData.AT.mx.toFixed(2)}&#176; F
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="WeatherDisplay">
      <h2>Establishing a connection with Mars...</h2>
    </div>
  );
}

export default WeatherDisplay;

WeatherDisplay.propTypes = {
  setDay: PropTypes.func.isRequired,
  dayData: PropTypes.object,
  day: PropTypes.string.isRequired,
};

WeatherDisplay.defaultProps = {
  dayData: {},
};
