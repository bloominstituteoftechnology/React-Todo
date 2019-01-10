import React from 'react';

const SearchComponent = props => {
  return (
    <form>
      <input
        className="search-bar"
        type="text"
        name="searchValue"
        placeholder="Search Tasks"
        onChange={props.searchTasks}
      />
    </form>
  );
};

export default SearchComponent;
