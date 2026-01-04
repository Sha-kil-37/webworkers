import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);
//
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [projectActiveCategory, setProjectActiveCategory] = useState("All");

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        projectActiveCategory,
        setProjectActiveCategory,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
