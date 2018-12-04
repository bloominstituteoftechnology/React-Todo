import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
let list = ["yes"];
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
    console.log(this.state.stateList);
    list.push(e.target.parentNode.children[0].value);
    e.target.parentNode.children[0].value = "";
    this.setState({ stateList: list });
  };
  handleClear = e => {};

  render() {
    return (
      <div>
        <h2>Todo list: MVP</h2>
        <TodoList list={this.state.stateList} />
        <TodoForm
          change={this.handleInputChange}
          clearCompleted={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
