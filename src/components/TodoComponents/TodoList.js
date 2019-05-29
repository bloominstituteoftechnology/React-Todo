import React from 'react';

export default function TodoList(props) {
  const {toDoList} = props;
  return(
    <ol>
      {
        toDoList.map(todo => <li key={todo.id} >{todo.task}</li>)
      }
    </ol>
  )
}