import React, { Component } from "react";
import Todo from "./Todo";
import Form from "./TodoForm";

class List extends Component {
  render() {
    return (
      <div className="list">
        <ul>
          <Todo />
          <Form />
        </ul>
      </div>
    );
  }
}

export default List;
