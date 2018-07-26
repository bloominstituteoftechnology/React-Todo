import React from 'react';
import './Todo.css'

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completion: props.completion,
      taskItem: props.taskItem,
    }
  }

  handleTaskChange = event => {
    this.setState(prevState => {return {completion: !prevState.completion}});
  }

  render() {return (
    <div className={this.state.completion ? 'strikethrough' : null} onClick={this.handleTaskChange}>
      <h1>{this.state.taskItem}</h1>
    </div>
  );}
}


export default Todo;

// {this.state.completion ? 'strikethrough' : null}
