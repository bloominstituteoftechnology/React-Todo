import React from 'react';

const TodoForm = props => {
  return(
    <form>
      <input
        type="text"
        placeholder="...todo"
        name="newTodo"
        value={props.newTodo}
        onChange={props.changeInput}
      />
      <button type="submit" onClick={props.addNewTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
