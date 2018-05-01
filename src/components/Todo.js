import React from 'react';

const Todo = props => {
  return (
    <ul>
      {
        props.list.map((item, i) => {
          return <li key={i}>{item}</li>;
        })
      }
    </ul>
  );
}

export default Todo;