import React, { useReducer } from "react";

const blankForm = {
  name: "",
  email: "",
  date: "",
  time: "",
  feeling: "3",
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.value,
      };
    case "setEmail":
      return {
        ...state,
        email: action.value,
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
    case "setFeeling":
      return {
        ...state,
        feeling: action.value,
      };
    case "reset":
      return blankForm;
    default:
      break;
  }
}

function AppointmentForm() {
  const [formState, dispatch] = useReducer(reducer, blankForm);

  return (
    <div className="App">
      <h1 className="AppointmentForm__header">Schedule an appointment</h1>
      <form
        method="post"
        className="AppointmentForm"
        onSubmit={(event) => {
          console.log("Submitted!", formState);
          event.preventDefault();
        }}
      >
        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="name">
            Name:
          </label>
          <input
            className="AppointmentForm__input"
            name="name"
            type="text"
            value={formState.name}
            onChange={(event) => {
              dispatch({ type: "setName", value: event.target.value });
            }}
          />
        </div>

        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="email">
            Email:
          </label>
          <input
            className="AppointmentForm__input"
            name="email"
            type="email"
            value={formState.email}
            onChange={(event) => {
              dispatch({ type: "setEmail", value: event.target.value });
            }}
          />
        </div>

        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="date">
            Date:
          </label>
          <input
            className="AppointmentForm__input"
            name="date"
            type="date"
            value={formState.date}
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
            className="AppointmentForm__input"
            name="time"
            type="time"
            value={formState.time}
            onChange={(event) => {
              dispatch({ type: "setTime", value: event.target.value });
            }}
          />
        </div>

        <div className="AppointmentForm__div">
          <label className="AppointmentForm__label" htmlFor="range">
            How are you feeling?
          </label>
          <p>{formState.feeling}</p>
          <input
            className="AppointmentForm__input"
            name="range"
            type="range"
            min="1"
            max="5"
            list="feelings"
            value={formState.feeling}
            onChange={(event) => {
              dispatch({ type: "setFeeling", value: event.target.value });
            }}
          />
        </div>

        <div className="AppointmentForm__div AppointmentForm__div--btns">
          <button
            className="AppointmentForm__button"
            type="reset"
            onClick={() => dispatch({ type: "reset" })}
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
