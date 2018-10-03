import React from "react";

class TodoList extends React.Component {

  render() {
    return (
      <div>
        {this.props.taskLists.map(x => {
          return <div key={x.id}>{x.task}</div>;
        })}
      </div>
    );
  }
}

export default TodoList;