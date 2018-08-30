import React from 'react';

function SearchForm(props) {
  return (
      <form>
          <input
           value={props.inputSearch}
           onChange={props.handleChange}
           placeholder='new task...'
           name="todoText" />
          <button onClick={props.search}>Add Tolakfhaskdo</button>
          <button onClick={props.clear}>Clear Completed</button>
      </form>
  );
}


export default SearchForm
