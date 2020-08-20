import React from "react";

import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

function SearchWidget() {
  return (
    <div className="SearchWidget">
      <SearchInput />
      <SearchResults />
    </div>
  );
}

export default SearchWidget;
