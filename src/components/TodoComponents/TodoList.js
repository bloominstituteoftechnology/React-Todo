// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "../TodoComponents/Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.taskLists = this.props.taskLists;
  }

  render() {
    return (
      <div>
        {this.taskLists.map(todo => {
          return <Todo key={todo.id} todo={todo} selected={this.props.selected}/>;
        })}
      </div>
    );
  }
}


export default TodoList;