import React from 'react';

class Todo extends React.Component{
  constructor(props){
    super()
    this.props = props;
  }

  render(){
      return (
        <li>{this.props.task}</li>
    )
  }
}

export default Todo;