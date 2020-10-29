import React from 'react';

import './Todo.css';

class TaskList extends React.Component {

handleClick = (e) =>{
    e.preventDefault();
    console.log(e.target.id)
    this.props.markComplete(e.target.id);
}
 

  render() {
      
    return (
      <div>
         {this.props.tasks.filter(a => a.task.includes(this.props.search)).map(a => <div id = {a.id} key = {a.id} className = {a.completed ? 'completed' : 'not'} onClick = {this.handleClick}>{a.task}</div>)}
      </div>
      
    );
  }
}

export default TaskList;
