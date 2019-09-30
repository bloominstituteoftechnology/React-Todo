import React from 'react';
import Todo from './Todo';

import Button from '@material-ui/core/Button';



class TodoList extends React.Component {
  constructor(props) {
    super();

  }
  render() {
    return (
      <>
        <div>
          {this.props.tasks.map(entry =>
            <Todo key={entry.id} id={entry.id} task={entry.task} completed={entry.completed} toggleCompleted={this.props.toggleCompleted} />)}
        </div>
        <Button
          color='secondary'
          size='small'
          onClick={this.props.clearCompleted}
        >
          Clear Completed</Button>

      </>
    )
  }
}

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
