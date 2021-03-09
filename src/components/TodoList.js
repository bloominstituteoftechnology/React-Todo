// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";


class TodoList extends Component {
  
  render() {
    
        return (
    <div className="todo-list">
        {this.props.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={this.props.todo}
            toggleCompleted={this.props.toggleCompleted}
          />
        ))}
      </div>
      
    
        )}
}

export default TodoList;
