// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
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
        {}
        {this.props.items.map(item => (
          <Todo item={item.task} />
        ))}
      </ul>
    );
  }
}
export default TodoList;