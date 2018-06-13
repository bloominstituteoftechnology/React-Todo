import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list">
        <TodoForm />
        <ul>
          <Todo />
        </ul>
      </div>
    );
  }
}

export default TodoList;