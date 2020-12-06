import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='task-list'>
        {this.props.tasks.map((taskItem) => (
          <Todo
            handleToggleItem={this.props.handleToggleItem}
            key={taskItem.id}
            taskItem={taskItem}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
