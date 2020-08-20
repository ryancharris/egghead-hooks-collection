import React from "react";
import { faBeer, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ResultCard({ name, street, type, website }) {
  return (
    <a href={website} target="__blank">
      <div className="ResultCard">
        <div className="ResultCard__content">
          <h3 className="ResultCard__header">{name}</h3>
          <p>{street}</p>
        </div>
        <div className="ResultCard__icons">
          {type === "brewpub" && (
            <FontAwesomeIcon
              icon={faHamburger}
              className="ResultCard__burger"
            />
          )}
          <FontAwesomeIcon icon={faBeer} className="ResultCard__beer" />
        </div>
      </div>
    </a>
  );
}

export default ResultCard;
