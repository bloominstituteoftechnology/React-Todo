import React from 'react';
import './Todo.css';

class Todo extends React.Component{
  constructor(props){
    super()
    this.props = props;
  }

  render(){
      return (
        <li className="list-item"onClick={this.props.onTodoClick}>{this.props.task}</li>
    )
  }
}

export default Todo;