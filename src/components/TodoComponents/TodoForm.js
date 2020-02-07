import React from 'react';
import {Button} from 'reactstrap';
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Enter your todo"
      />
      <Button onClick={props.handleAddTodo}>Add Item</Button>
      <Button onClick={props.handleClearTodos}>Clear Completed</Button>
    </form>
  );
};

export default TodoForm;