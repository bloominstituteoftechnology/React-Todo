import React from 'react';
import { Card } from '@material-ui/core';

class Todo extends React.Component {
  constructor(props) {
    super();
  };

  handleToggle = e => {
    e.preventDefault();
    console.log('handleToggle was clicked', this.props.id);
    this.props.toggleCompleted(this.props.id);
  }

  render() {
    return (
      <Card
        raised='true'
      >
        <span
          onClick={this.handleToggle}
        >
          <p

            style={
              this.props.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>

            {this.props.task}
          </p>
        </span>
      </Card>
    )
  }
}

export default Todo;