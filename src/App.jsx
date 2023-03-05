import { useEffect, useState } from "react";
import { getAutocompleteResults } from "./helper";

function App() {
  const [query, setQuery] = useState();
  const [suggestions, setSuggestions] = useState();

  useEffect(() => {
    (async () => {
      const data = await getAutocompleteResults(query);
      setSuggestions(data);
    })();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-900">
      <input
        className="mt-24 mb-4 bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for a fruit"
        type="text"
        value={query}
        autoFocus
        onChange={(value) => setQuery(value)}
      />
      <div className="text-gray-200 flex flex-col gap-2 items-start">
        <h3 className="text-xl">Show result here</h3>
      </div>
    </div>
  );
}

export default App;
