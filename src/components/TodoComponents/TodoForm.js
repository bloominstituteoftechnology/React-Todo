import React from 'react';

//make a function called TodoForm, this will be where you create all
//of the button and input objects for the list. 
const TodoForm = props => {
  return (
    <form>
    {/*make an input*/}
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Type your Todo"
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;