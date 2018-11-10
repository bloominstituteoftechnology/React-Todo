import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  // console.log(props);
  
  return (
    <div className="todoContainer">
      <h1>Todo List: MVP</h1>
      {props.getTodos.map(todo => (
        <Todo 
          key={todo.id}
          toggleComplete={props.toggleComplete}
          props={todo}
        />        
      ))}
    </div>
  )
}

export default TodoList;