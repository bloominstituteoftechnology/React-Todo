import React from "react";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todo: [], doing: "" };
  }
  handleInputChange = event => {
    this.setState({ doing: event.target.value });
  };

  addTodo = prevState => {
    let changedList = this.state.todo.slice();
    let newItem = {
      task: this.state.current,
      id: Date.now(),
      completed: false
    };
    changedList.push(newItem);
    this.setState({ todo: changedList, doing: "" });
  };

  render() {
    return (
      <TodoList
        list={this.state.todo}
        onChange={this.handleInputChange}
        onSubmit={this.addTodo}
      />
    );
  }
}

export default App;
