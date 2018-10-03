import React from 'react';

const TodoForm = props => {
    return (
        <form >
        <input
          onChange={props.handleTodoChange}
          type="text"
          name="inputTodo"
          value={props.value}
          placeholder="...todo"
        />
        <button onClick={props.handleAddTodo}>Add Todo</button>
        <button onClick={props.clearCompleted}>Clear Completed</button>
      </form>
    );
}


export default TodoForm;