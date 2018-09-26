import React from 'react';

const Todo = props => {
  return (
    <div key={props.id} id={props.id}>
      {props.text}
    </div>
  );
};

export default Todo;
