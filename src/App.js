// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";
import "../src/components/TodoComponents/Todo.css";

const todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    //state is the BRAIN of the tree component
    this.state = {
      todoList: todo,
      task: "",
      id: Date.now(),
      completed: "null"
    };
  }

  handleChanges = e => {
    console.log("event:", e.target.value);
    // update the task property on state
    // this.setState({ [e.target.task]: e.target.value });
    this.setState({ task: e.target.value });
  };

  addTodo = e => {
    console.log("fired");
    e.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    //creating a brand new array
    this.setState(
      { todoList: [...this.state.todoList, newTodo] } //copy of array
    );
  };

  addItem = item => {
    const copy = this.state.groceries.slice();
    copy.push(item);
    // BUILD OUR ITEM OBJECT
    // this.setState({ groceries: copy });
  };

  render() {
    return (
      <div className="app">
        <div className="title">
          <i className="fa fa-tasks fafa" />
          My To-do List
        </div>

        <TodoForm
          task={this.state.task}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
        />
        <div>
          {this.state.todoList.map(todo => (
            <TodoList todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
