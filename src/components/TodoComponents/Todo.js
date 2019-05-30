import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div onClick={this.props.onClick} className={this.props.todoInfo.completed ? 'todo-complete' : 'todo-incomplete'}>
        {this.props.todoInfo.task}
      </div>
    );
  }
}

export default Todo;