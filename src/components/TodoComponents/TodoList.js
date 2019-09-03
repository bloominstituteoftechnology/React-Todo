// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "../TodoComponents/Todo";

class Todolist extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <div className="todo-container">
        {todos.map((todo, index) => {
          return <Todo updateTodo={this.updateTodo} key={index} todo={todo} />;
        })}
      </div>
    );
  }

  updateTodo = todo => {
    this.props.updateTodo(todo);
  };
}

export default Todolist;
