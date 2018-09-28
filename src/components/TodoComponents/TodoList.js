// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "../TodoComponents/Todo";

class TodoList extends React.Component {
  render() {
    if(this.props.taskLists.length === 0){
      return(
        <div className="notice-todo">
          <p>Please add some Todos</p>
        </div>
      );
    }
    else{
      return (
        <div className="display-todo">
          {this.props.taskLists.map(todo => {
            return <Todo key={todo.id} todo={todo} selected={this.props.selected}/>;
          })}
        </div>
      );
    }
  }
}


export default TodoList;