import React from 'react';

// Importing COMPONENTS
import Todo from './Todo.js';

class TodoList extends React.Component {
  render() {
    return (
        <div>
          <Todo todo={this.props.todo}/>
        </div>
    );
  }
}

export default TodoList;
