import React from "react";

class Todo extends React.Component {


    render() {
        return (
            <div id={this.props.task.id}
              onClick={() => this.props.toggleCompleted(this.props.task.id)}
              className={this.props.task.completed ? "pressed" : "button"}
            >
              <li className={this.props.task.completed ?"textpressed": ''}>{this.props.task.task}</li>
            </div>
          );
    }

}
  

export default Todo;