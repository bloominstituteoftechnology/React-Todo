import React from "react";

class Todo extends React.Component {


    render() {
        return (
            <div
              onClick={() => this.props.toggleCompleted(this.props.task.id)}
              className={this.props.task.completed ? "completed" : ""}
            >
              <li>{this.props.task.task}</li>
            </div>
          );
    }

}
  

export default Todo;