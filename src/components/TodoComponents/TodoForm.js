import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return (
    <div className="todo-form">
      <input name="todo" className="inputField" value={props.value} onChange={props.handleTodoChange} type="text"/>

      <div className = "button-container">
        <button c className=" button buttonAdd" onClick={props.handleAddTodo}> Add Todo </button>
        <button className=" button buttonClear" onClick={props.handleClearTodos}> Clear Completed  </button>
      </div>
    </div>
  );
};

export default TodoForm;