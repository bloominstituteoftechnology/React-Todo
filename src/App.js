import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css"

const tasks = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: tasks,
      thing: {
        task: "",
        id: "",
        completed: ""
      }
    };
  }

  textChangeHandler = event => {
    this.setState({
      ...this.state,
      thing: {
        ...this.state.thing,
        [event.target.name]:event.target.value,
        // task: event.target.value, // set up a value
        id: Date.now(),
        completed: false
      }
    });
  };

  enterItemHandler = event => {
    event.preventDefault();
    this.setState({
   
      list: [...this.state.list, this.state.thing],
      thing: {
        task: "",
        id: "",
        completed: ""
      }
    },()=>console.log(this.state));

  };
  
  emptyListHandler = event => {
    this.setState({
      list: []
    });
  };

  render() {
    return (
      <div className="container">
      <h1>To Do List</h1>
        <TodoForm
          textChange={this.textChangeHandler}
          enterItem={this.enterItemHandler}
          emptyList={this.emptyListHandler}
          info={this.state.thing}
        />
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default App;
