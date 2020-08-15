import React, { useEffect, useLayoutEffect } from "react";

function Circles() {
  useEffect(() => {
    const greenSquare = document.querySelector(".App__square--green");
    greenSquare.style.transform = "translate(-50%, -50%)";
    greenSquare.style.left = "50%";
    greenSquare.style.top = "50%";
  });

  useLayoutEffect(() => {
    const purpleSquare = document.querySelector(".App__square--purple");
    purpleSquare.style.transform = "translate(-50%, -50%)";
    purpleSquare.style.left = "50%";
    purpleSquare.style.top = "50%";
  });

  return (
    <>
      <div className="App__square App__square--green" />
      <div className="App__square App__square--purple" />
    </>
  );
}

export default Circles;
