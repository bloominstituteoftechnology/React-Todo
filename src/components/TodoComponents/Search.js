import React from "react";
import "./Todo.css";

const Search = ({ query, handleSearchInput }) => (
  <div className="search">
    <input
      name="search"
      type="text"
      placeholder="Search tasks..."
      value={query}
      onChange={event => handleSearchInput(event)}
    />
  </div>
);

export default Search;
