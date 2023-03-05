import { useEffect, useState } from "react";
import { fruits } from "./mock";

const getAutocompleteResults = (query) => {
  console.log("fetching", query);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fruits.filter((fruit) => fruit === query));
    }, Math.random() * 1000);
  });
};

function App() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAutocompleteResults(query);
      setSuggestions(data);
    })();
  }, [query]);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-900">
      <input
        className="mt-24 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for a fruit"
        type="text"
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="text-gray-200 flex flex-col gap-2 items-start">
        {suggestions.length > 0 ? (
          suggestions.map((suggestion) => (
            <h3 key={suggestion} className="text-xl">
              {suggestion}
            </h3>
          ))
        ) : (
          <h3 className="text-xl">Show result here</h3>
        )}
      </div>
    </div>
  );
}

export default App;
