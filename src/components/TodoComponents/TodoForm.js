import React from 'react';

const TodoForm = props => {
  return (
    <section className='form'>
      <form onSubmit={props.addItem}>
        <input
          type="text"
          name="inputText"
          placeholder="add new task"
          value={props.inputText}
          onChange={props.handleChange}
        />

        <input
          type="text"
          name="searchText"
          placeholder="search tasks"
          value={props.searchText}
          onChange={event =>{props.handleSearch(event); props.searchItem(props.searchText)}}
        />
      
        <button type="submit">Add Item</button>
        <button type="clear" onClick={props.clear}>Clear Completed</button>
      </form>
    </section>
  );
};

export default TodoForm;
