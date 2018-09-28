// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "../TodoComponents/Todo";

class TodoList extends React.Component {
  render() {
    return (
      <ol>
        {this.props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              clickHandler={this.props.clickHandler}
            />
          );
        })}
      </ol>
    );
  }
}

export default TodoList;
