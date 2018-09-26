// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //console.log(this.props.tasks)
    return (
      <div>
        {this.props.taskLists.map(task => {
          return <div key={task.id}>{task.task}</div>;
        })}
      </div>
    );
  }
}

export default TodoList;