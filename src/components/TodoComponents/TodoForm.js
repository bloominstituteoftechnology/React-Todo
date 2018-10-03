import React from 'react';
import TodoList from './TodoList';

function TodoForm(props) {
    return (
        <div>
        <form onSubmit={props.addNewTodo}>
          <input
            type="text"
            name="newTodo"
            onChange={props.changeHandler}
            value={props.newTask}
          />
          <button type="submit" onClick={props.addNewTodo}>
            Add Todo
          </button>
        </form>
      </div>
    )
}

export default TodoForm;