import React, { useEffect, useLayoutEffect } from "react";

function Modals() {
  useEffect(() => {
    const greenSquare = document.querySelector(".Modal--lime");
    greenSquare.style.transform = "translate(-50%, -50%)";
    greenSquare.style.left = "50%";
    greenSquare.style.top = "50%";
  });

  useLayoutEffect(() => {
    const purpleSquare = document.querySelector(".Modal--purple");
    purpleSquare.style.transform = "translate(-50%, -50%)";
    purpleSquare.style.left = "50%";
    purpleSquare.style.top = "50%";
  });

  return (
    <div className="Modals">
      <div className="Modal Modal--lime">Modal--lime</div>
      <div className="Modal Modal--purple">Modal--purple</div>
      {[...Array(5000).keys()].map((idx) => {
        return <p key={idx}></p>;
      })}
    </div>
  );
}

export default Modals;
