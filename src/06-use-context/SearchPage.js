import React, { useState, useEffect } from "react";

import SearchWidget from "./SearchWidget";

import { fetchApiData } from "./utils";

export const SearchContext = React.createContext();

function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredResults = fetchApiData(inputValue);
    setSearchResults(filteredResults);
  }, [inputValue]);

  return (
    <div className="SearchPage">
      <SearchContext.Provider
        value={{
          results: searchResults,
          setInputValue: setInputValue,
        }}
      >
        <SearchWidget />
      </SearchContext.Provider>
    </div>
  );
}

export default SearchPage;
