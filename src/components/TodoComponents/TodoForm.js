import React from "react";
import {
    InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";

const TodoForm = props => {

    let input = '';

    const setInput = (e) => {
        input = e.target.value;
        console.log(input);
    }

    const taskManager = (task) => {
        let addTodo = props.addTodo;
        let newTask = {task: task, status: false};
        if(task !== '' && task !== undefined) {
            console.log(newTask);
            addTodo(newTask);
        } else {
            console.log('Invalid task')
        }
    }

    const clearComplete = () => {
        console.log('clear')
    }

  return (
    <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText>Task</InputGroupText>
    </InputGroupAddon>
    <Input onChange={(e) => setInput(e)}/>
    <InputGroupAddon addonType="append">
      <Button color="primary" onClick={(e) => taskManager(input)}>Add!</Button>
    </InputGroupAddon>
    <InputGroupAddon addonType="append">
      <Button color="secondary">Clear Complete</Button>
    </InputGroupAddon>
  </InputGroup>
  );
};

export default TodoForm;