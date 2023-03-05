import { fruits } from "./mock";

export const getAutocompleteResults = (query) => {
  console.log("fetching", query);
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(fruits.map((fruit) => fruit === query));
    }, Math.random() * 1000);
  });
};
