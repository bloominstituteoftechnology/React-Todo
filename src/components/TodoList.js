import React from 'react';

import Todo from './Todo'

class TodoList extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos: props.todos
  //   };
  // }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
