import React from 'react';
import Todo form './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todoList.map( x => <Todo key={todo.id} data={x} />)}
    </div>
  )
}

export default Todos;
