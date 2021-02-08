// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

  render() {
    return(
      <div>
        {this.props.todos.map(item => <Todo key={item.task} task={item.task} completed={item.completed} toggleCheck={this.props.toggleCheck} />)}
      </div>
    )
  }
}

export default TodoList;