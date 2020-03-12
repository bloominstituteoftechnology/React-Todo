import React from 'react';

import Todo from './Todo'

class TodoList extends React.Component {

  render() {
    return (
      <div className='todo-list'>
        <button onClick={this.props.clearCompleted}>Clear completed</button>
        <ul>
          {this.props.todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleCompleted={this.props.toggleCompleted}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
