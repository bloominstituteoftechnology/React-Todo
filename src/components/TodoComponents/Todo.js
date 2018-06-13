import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      task: props.task,
      id: props.id,
      isCompleted: props.isCompleted,
      setCompletedState: props.setCompletedState,
      myClass: ''
    }
  }

  onClick = e => {
    e.preventDefault();
    let myState, myClass = '';
    if (this.state.isCompleted) {
      myState = this.state.setCompletedState(this.state.id);
      console.log('turned incomplete');
    } else {
      myState = this.state.setCompletedState(this.state.id);
      myClass = 'is-completed';
      console.log('turned complete');
    }
    this.setState({isCompleted: myState, myClass: myClass});
  };

  render() {
    return(
      <li className={this.state.myClass} onClick={this.onClick}>{this.state.task}</li>
    );
  }    
}

export default Todo;