// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <div className="todoListContainer">
        {todos.map((_todo, _index) => {
          return (
            <TodoItem
              updateTodoFn={this.updateTodo}
              key={_index}
              todo={_todo}
            ></TodoItem>
          );
        })}
      </div>
    );
  }

  updateTodo = (todo) => {
    this.props.updateTodoFn(todo);
  };
}

export default TodoList;
