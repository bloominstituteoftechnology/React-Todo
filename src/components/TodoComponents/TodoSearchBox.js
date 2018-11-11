import React from 'react';

const TodoSearchBox = props => {
  return (
    <input
      className="search"
      type="text" 
      name="filterText"
      onChange={ (e) => props.handleChange(e) }
      value={props.filterText}
      placeholder="Filter"
    />
  );
};

export default TodoSearchBox;