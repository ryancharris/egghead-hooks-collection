import React, {
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
  useContext,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { SearchContext } from "./SearchPage";

function SearchInput({ autoFocus }) {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(null);
  const context = useContext(SearchContext);

  useLayoutEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
      setFocused(true);
    }
  }, [autoFocus]);

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

  function handleInputChange(event) {
    context.setInputValue(event.currentTarget.value);
  }

  const focusCn = focused ? "SearchInput focused" : "SearchInput";

  return (
    <div className={focusCn}>
      <input
        onChange={handleInputChange}
        ref={inputRef}
        type="search"
        className="SearchInput__input"
      />
      <div className="SearchInput__icon-wrapper">
        <FontAwesomeIcon icon={faSearch} className="SearchInput__icon" />
      </div>
    </div>
  );
}

export default SearchInput;
