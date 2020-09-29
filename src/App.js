import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super();
    this.state = {
      todoList: [],
    };
  }
  addNewTodo = (data) => {
    const newTask = {
      task: data,
      id: Date.now(),
      completed: false,
    };
    this.state.todoList.push(newTask);
    this.setState(newTask);
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.todoList} />
        <TodoForm addNewTodo={this.addNewTodo} />
      </div>
    );
  }
}

export default App;
