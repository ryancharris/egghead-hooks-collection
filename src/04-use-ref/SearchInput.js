import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchInput({ autoFocus }) {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(null);

  // Use our ref to focus the input on initial render
  // based upon the value of autoFocus.
  useLayoutEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
      setFocused(true);
    }
  }, [autoFocus]);

  // Listen for clicks and focus or blur the input
  // based on on what element the user clicks on. We
  // also use this to determine our input's className.
  useEffect(() => {
    function handleClick(event) {
      if (event.target === inputRef.current) {
        inputRef.current.focus();
        setFocused(true);
      } else {
        inputRef.current.blur();
        setFocused(false);
      }
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

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
