import React, { useRef, useState, useEffect } from "react";
import randomColor from "randomcolor";

function Counters() {
  let refValue = useRef(0);
  const [stateValue, setStateValue] = useState(0);
  const [refHex, setRefHex] = useState(randomColor());
  const [stateHex, setStateHex] = useState(randomColor());

  useEffect(() => {
    setRefHex(randomColor());
  }, [refValue]);

  useEffect(() => {
    setStateHex(randomColor());
  }, [stateValue]);

  const refStyles = {
    background: `${refHex}`,
  };

  const stateStyles = {
    background: `${stateHex}`,
  };

  return (
    <div className="Counters">
      <main className="Counters__main">
        <div style={refStyles} className="Counters__section">
          <p>
            <strong>refValue:</strong> {refValue.current}
          </p>
          <div className="Counters__actions">
            <button
              className="Counters__button"
              onClick={() => {
                console.log("decrementing refValue");
                refValue.current -= 1;
              }}
            >
              -
            </button>
            <span>Ref</span>
            <button
              className="Counters__button"
              onClick={() => {
                console.log("incrementing refValue");
                refValue.current += 1;
              }}
            >
              +
            </button>
          </div>
        </div>
        <div style={stateStyles} className="Counters__section">
          <p>
            <strong>stateValue:</strong> {stateValue}
          </p>
          <div className="Counters__actions">
            <button
              className="Counters__button"
              onClick={() => setStateValue(stateValue - 1)}
            >
              -
            </button>
            <span>State</span>
            <button
              className="Counters__button"
              onClick={() => setStateValue(stateValue + 1)}
            >
              +
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Counters;
