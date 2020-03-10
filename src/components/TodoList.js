// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "./Todo";

class TodoList extends React.Component {

  render() {
    console.log(this.props.tasks)
    return (
      <div>
        <div>        
          {this.props.tasks.map(Task=>(
            <Todo task={Task} toggleCompleted={this.props.toggleCompleted}/>
          ))}
        </div>
        <div>        
          <button className="clear-btn" onClick={this.props.clearCompleted}>Clear completed</button>
        </div>
      </div>
    );
  }
}

export default TodoList;
