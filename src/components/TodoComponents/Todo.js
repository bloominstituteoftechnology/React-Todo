import React from "react";
 class Todo extends React.Component {
  render() {
    return <li class = 'todo-item'>{this.props.item}</li>;
  }
}

 export default Todo;
