import React from 'react';

const SearchComponent = props => {
  return (
    <form>
      <input
        className="search-bar"
        type="text"
        name="searchText"
        placeholder="Search Tasks"
        onChange={props.handleChanges}
      />
    </form>
  );
};

export default SearchComponent;
