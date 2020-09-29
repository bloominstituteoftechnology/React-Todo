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
    const todoList = this.state.todoList;
    const newTask = {
      task: data,
      id: Date.now(),
      completed: false,
    };
    todoList.push(newTask);
    this.setState({ todoList });
  };
  markTodoDone = (id) => {
    const updatedList = this.state.todoList.map((item) => {
      if (item.id === id) {
        item.completed = true;
      }
      return item;
    });

    this.setState({ todoList: updatedList });
  };
  clearCompleted = () => {
    const result = this.state.todoList.filter(
      (task) => task.completed === false
    );
    this.setState({ todoList: result });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.todoList} markTodoDone={this.markTodoDone} />
        <TodoForm
          addNewTodo={this.addNewTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
