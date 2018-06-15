import React from 'react';
import './Todo.css';

class Todo extends React.Component{
  constructor(props){
    super()
    this.props = props;
  }

  render(){  
    return (
      //The list-item class always needs to be on the li, the completed class will be placed on it if the completed flag is true.    
      <li className={`list-item ${(this.props.todo.completed) ? "completed" : null}`} 

      //pass the id into the todoClick Handler. It needs to be an anonymous arrow function because otherwise it would be called instantaneously
        onClick={() => this.props.onTodoClick(this.props.todo.id)}>
        <h4>{this.props.todo.task}</h4>
      </li>
    )
  }
}

export default Todo;