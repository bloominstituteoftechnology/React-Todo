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
      
        <button type="submit">Add Item</button>
        <button type="clear">Clear Completed</button>
      </form>
    </section>
  );
};

export default TodoForm;
