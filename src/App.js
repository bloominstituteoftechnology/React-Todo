import React from "react";
import Todo from "./components/TodoComponents/Todo";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: [],
      current_todo: ""
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <input
          type="text"
          placeholder="Enter to-do"
          value={this.state.current_todo}
          className="form-control"
        />
        <button className="btn-Add">Add todo</button>
      </div>
    );
  }
}

export default App;
