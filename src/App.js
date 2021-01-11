import React from "react";
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

const todosArray = [
  {
    todoName: "test item",
    id: Date.now(),
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todosArray: todosArray,
    };
  }
  handleAddTodo = (newTodoName) => {
    const newTodo = {
      todoName: newTodoName,
      id: Date.now(),
      completed: false,
    };

    const newTodoArray = [...this.state.todosArray, newTodo];

    this.setState({
      todosArray: newTodoArray,
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm handleAddTodo={this.handleAddTodo}></ToDoForm>
        <ToDoList todosArray={this.state.todosArray}></ToDoList>
      </div>
    );
  }
}

export default App;
