import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
    <div>
      {props.todos.map( (todo, index) => <Todo key={todo.id + index} data={todo} />)}
    </div>
  )
}

export default TodoList;