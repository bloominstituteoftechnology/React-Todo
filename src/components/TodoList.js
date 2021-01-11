import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-xl my-4">List of Todos</h1>
        {this.props.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={this.props.toggleComplete}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
