import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor() {
      super();
      this.state = {
        todoList: []
      }
    }
  
    render() {
      return (
        <div>
          <h2>New Task</h2>
        </div>
      );
    }
  }

  export default TodoList;

  