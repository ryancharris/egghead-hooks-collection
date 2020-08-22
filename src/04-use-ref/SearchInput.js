import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchInput({ autoFocus }) {
  const [focused, setFocused] = useState(null);
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
      setFocused(true);
    }
  }, [autoFocus]);

  const focusCn = focused ? "SearchInput focused" : "SearchInput";

  return (
    <div className={focusCn}>
      <input ref={inputRef} type="search" className="SearchInput__input" />
      <div className="SearchInput__icon-wrapper">
        <FontAwesomeIcon icon={faSearch} className="SearchInput__icon" />
      </div>
    </div>
  );
}

export default SearchInput;
