import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todos: props.todos
    };
  }

  render() {
    const myTodos = this.state.todos;
    return(
      <ul>
        {myTodos.map((todo) => {
          return <Todo />;
        })}
      </ul>
    );
  }  
}

export default TodoList;