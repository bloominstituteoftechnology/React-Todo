import React from 'react';
import TodoList from './TodoList';

function TodoForm(props) {
    return (
        <div>
        <form >
          <input
            type="text"
            onChange={props.addTodo}
            value={props.newTodo}
            name="newTodo"
          />
          <button type="submit" onClick={props.addNewTodo}>
            Add Todo
          </button>
        </form>
      </div>
    )
}

export default TodoForm;