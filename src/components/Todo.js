import React from 'react';
import classNames from 'classnames';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      completed: false
    }
  }

  updateStatus = () => {
    this.setState({ completed: !this.state.completed });
  }

  render = () => {
    const classes = classNames({
      'todo-list__todo': true,
      'todo-list__todo--complete': this.state.completed
    });
    return <div className={classes} onClick={this.updateStatus}>{this.state.text}</div>;
  };
};