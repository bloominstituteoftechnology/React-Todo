import React from "react";
import Todo from "./Todo.js";
import "./Todo.css";

class TodoList extends React.Component {
  constructor(props) {
    //console.log(props);
    super();
    this.state = {};
  }
  render() {
    return (
      <ul>
        {/* loop through list of todos and return a todo component */}
        {this.props.items.map(item => (
          <Todo item={item.task} />
        ))}
      </ul>
    );
  }
}
export default TodoList;
