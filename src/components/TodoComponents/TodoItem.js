import React from "react";

class ToDoItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    //
    return (
      <div>
        "<div className="title">name of task goes here"</div>
        <input type="checkbox" />
      </div>
    );
  }
}

export default ToDoItem;
