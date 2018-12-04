import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
let list = [];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      stateList: list
    };
  }

  handleInputChange = e => {
    e.preventDefault();
    console.log(this.state.stateList);
    list.push({
      task: e.target.parentNode.children[0].value,
      id: Date.now(),
      completed: false
    });
    e.target.parentNode.children[0].value = "";
    this.setState({ stateList: list });
  };
  handleClear = e => {
    list = list.filter(e => !e.completed);
    this.setState({ stateList: list });
  };
  handleStrike = id => {
    list = list.map(e => {
      if (e.id === id && e.completed === false) {
        return {
          task: e.task,
          id: e.id,
          completed: true
        };
      } else if (e.id === id && e.completed === true) {
        return {
          task: e.task,
          id: e.id,
          completed: false
        };
      } else {
        return e;
      }
    });
    this.setState({
      stateList: list
    });
    // e.target.style.textDecoration = "line-through";
  };
  render() {
    return (
      <div className="todo">
        <h2>Todo list: MVP</h2>
        <TodoList list={this.state.stateList} strike={this.handleStrike} />
        <TodoForm
          change={this.handleInputChange}
          clearCompleted={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
