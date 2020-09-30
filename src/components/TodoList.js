import React from 'react';

class TodoList extends React.Component {


  render() {
  return (
    <div>
      {props.todo.map(todo => (
        <Todo key={todo.id} />
      ))}
    </div>
  )
  }
}
