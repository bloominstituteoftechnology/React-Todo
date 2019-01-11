import React from "react";

<<<<<<< HEAD
const TodoForm = props => {
  return (
    <div className="todoForm">
      <form onSubmit={props.addTask}>
        <input
          className='todo'
          type="text"
          name="inputText"
          placeholder="add new task"
          value={props.inputText}
          onChange={props.handleChange}
        />

        <button className='todoButton' type="submit">Add Todo</button>
        <button className='clearButton' onClick={props.clearButton}>Clear Button</button>
      </form>
    </div>
  );
};

export default TodoForm;
=======

function TodoForm(props) {
  return (
    <form className='main-form'>
      <input
        value={props.newTodoText}
        type="text"
        onChange={props.handleChanges}
        name="newTodoText"
        className='todo'
      />
      <button className='todoButton' onClick={props.addTodo}>Add Todo</button>
      <button className='clearButton'>Clear Button</button>
    </form>
  );
}

export default TodoForm;
>>>>>>> 466f99b10404af68e500587d92f0bf0e03f39a25
