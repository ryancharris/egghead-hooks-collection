import React, { useContext } from "react";

import ResultCard from "./ResultCard";

import { SearchContext } from "./SearchPage";

function SearchResults() {
  const context = useContext(SearchContext);

  function createCards() {
    return context.results.length > 0 ? (
      context.results.map((result) => {
        return (
          <ResultCard
            key={result.id}
            type={result.brewery_type}
            name={result.name}
            street={result.street}
            website={result.website_url}
          />
        );
      })
    ) : (
      <p className="SearchResults__empty">No matching results...</p>
    );
  }

  return <div className="SearchResults">{createCards()}</div>;
}

export default SearchResults;
