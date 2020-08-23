import React, { useReducer } from "react";

const initialValue = {
  name: "",
  date: "",
  time: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.value,
      };
    case "setDate":
      return {
        ...state,
        date: action.value,
      };
    case "setTime":
      return {
        ...state,
        time: action.value,
      };
    case "reset":
      return initialValue;
  }
}

function AppointmentForm() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div className="App">
      <h1 className="AppointmentForm__header">Schedule an appointment</h1>
      <form
        method="post"
        className="AppointmentForm"
        onSubmit={(event) => {
          console.log("Submitted!");
          event.preventDefault();
        }}
      >
        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="name">
            Name:
          </label>
          <input
            value={state.name}
            className="AppointmentForm__input"
            name="name"
            type="text"
            onChange={(event) => {
              dispatch({ type: "setName", value: event.target.value });
            }}
          />
        </div>

        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="date">
            Date:
          </label>
          <input
            value={state.date}
            className="AppointmentForm__input"
            name="date"
            type="date"
            onChange={(event) => {
              dispatch({ type: "setDate", value: event.target.value });
            }}
          />
        </div>

        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="time">
            Time:
          </label>
          <input
            value={state.time}
            className="AppointmentForm__input"
            name="time"
            type="time"
            onChange={(event) => {
              dispatch({ type: "setTime", value: event.target.value });
            }}
          />
        </div>

        <div className="AppointmentForm__div AppointmentForm__div--btns">
          <button
            className="AppointmentForm__button"
            type="reset"
            onClick={() => {
              dispatch({ type: "reset" });
            }}
          >
            Reset
          </button>
          <button className="AppointmentForm__button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
