import React from 'react';

const TodoList = props => {
  return (
    <div>
      <input type="text" value={props.todo} onChange={props.changeHandler} />
      <button onClick={props.addToList}>Submit Movie</button>
      <ul>
        {props.todos.map((todos, i) => {
          return <li key={i + 1}>{todos}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
