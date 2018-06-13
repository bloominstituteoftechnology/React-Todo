import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      task: props.task,
      isCompleted: props.isCompleted,
      myClass: ''
    }
  }

  onClick = e => {
    e.preventDefault();
    if (this.state.isCompleted) {
      this.setState({isCompleted: false, myClass: ''});
    } else {
      this.setState({isCompleted: true, myClass: 'is-completed'});
    }
  };

  render() {
    return(
      <li className={this.state.myClass} onClick={this.onClick}>{this.state.task}</li>
    );
  }    
}

export default Todo;