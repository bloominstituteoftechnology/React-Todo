import React from "react";
import Todo from "./components/TodoComponents/Todo";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: [],
      current_todo: ""
    };

    add_todo = () => {
      let populate = this.state.todo.slice();
      populate.push(current_todo);
      this.setState({
        todo: populate,
        current_todo: ""
      });
    };
    handleChange = event => {
      this.setState({
        current_todo: event.target.value
      });
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
          onChange={this.handleChange}
          className="form-control"
        />
        <button className="btn-Add">Add todo</button>
      </div>
    );
  }
}

export default App;
