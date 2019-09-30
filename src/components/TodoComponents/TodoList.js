import React from 'react';
import Todo from './Todo';




class TodoList extends React.Component {
  constructor(props) {
    super();

  }
  render() {
    return (
      <div>
        {this.props.tasks.map(entry =>
          <Todo key={entry.id} task={entry.task} />)}
      </div>
    )
  }
}

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
