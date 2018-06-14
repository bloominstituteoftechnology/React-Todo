import React from 'react';
const TodoSearch = props => {
  return (
    <form>
      <input type='text' name='search' placeholder='Search Tasks' value={props.value} onChange={props.searchChangeHandler} />
      <button onClick={props.searchTaskHandler}>Search</button>
    </form>
  )
}

export default TodoSearch;
