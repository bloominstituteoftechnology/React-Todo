import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {

  // render(props) {
  return (
    <div>
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleItem={props.toggleItem}/>
      ))}
    </div>
  )
  }
// }

export default TodoList;