import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return <div>
        This is the TodoList Component
        <ul>
          <Todo />
          <Todo />
          <Todo />
        </ul>
      </div>;
  }
}

export default TodoList;