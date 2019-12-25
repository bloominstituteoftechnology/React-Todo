import React from "react";
import {
    InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";

const TodoForm = props => {

  const addTodo = props.addTodo;
  const removeComplete = props.removeComplete;

    let input = '';

    const setInput = (e) => {
        input = e.target.value;
        console.log(input);
    }

    const taskManager = (task) => {
        let todo = addTodo;
        let newTask = {task: task, status: false, id: Date.now()};
        if(task !== '' && task !== undefined) {
            console.log(newTask);
            todo(newTask);
        } else {
            console.log('Invalid task')
        }
    }

    const clearComplete = () => {
        let remove = removeComplete;
        console.log('form');
        remove();
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
      <Button color="secondary" onClick={(e) => clearComplete()}>Clear Complete</Button>
    </InputGroupAddon>
  </InputGroup>
  );
};

export default TodoForm;