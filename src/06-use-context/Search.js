import React, { useState, useEffect } from "react";

import SearchWidget from './SearchWidget'

import {fetchApiData} from './utils'


export const SearchContext = React.createContext();

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredResults = fetchApiData(inputValue);
    setSearchResults(filteredResults);
  }, [inputValue]);

  return (
    <div className="Search">
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

export default Search;
