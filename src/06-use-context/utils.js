import apiResults from './results.json'

export function fetchApiData(inputValue) {
  return apiResults
    .filter((brewery) => {
      return (
        brewery.name.toLowerCase().includes(inputValue.toLowerCase()) &&
        brewery.brewery_type !== "planning"
      );
    })
    .sort((a, b) => {
      return a.name > b.name;
    });
}