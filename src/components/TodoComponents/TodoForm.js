import React from 'react';
import { buttonStyle } from '../../Styles/FormStyles';
import { inputStyle } from '../../Styles/FormStyles';

const TodoForm = props => {
  return (
    <form>
      <input style= { inputStyle }
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="            ...To Do List"
      />
      <button style={buttonStyle} onClick={props.handleAddTodo}>Add Todo</button>
      <button style={buttonStyle} onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;