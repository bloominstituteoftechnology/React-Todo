import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

const list = [
  {
    task: "",
    id: null,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: list
    };
  }

  toggleItem = clickedId => {
    const newTodos = this.state.todoList.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      todoList: newTodos
    });
  };

  addItem = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

  clearCompleted = () => {
    const newToDo = this.state.todo.filter(item => item.completed < 1);
    this.setState({
      todoList: newToDo
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hutch's TODO List:</h1>
        <div className="todo-wrapper">
          <TodoForm addItem={this.addItem} todoList={this.state.todoList} />
        </div>
        <TodoList
          todoList={this.state.todoList}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}
export default App;
