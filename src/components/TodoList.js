// your components will all go in this `component` directory.
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleChange={this.props.handleChange}
          />
        ))}
      </div>
    );
  }
}
export default TodoList;
