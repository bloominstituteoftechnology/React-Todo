import React from "react";
import { Form1, Button, Input } from "./Styles";

const TodoForm = props => {
  return (
    <Form1>
      <Input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <Button onClick={props.handleAddTodo}>Add Todo</Button>
      <br></br>
      <Button onClick={props.handleClearTodos}>Clear Completed</Button>
    </Form1>
  );
};

export default TodoForm;
