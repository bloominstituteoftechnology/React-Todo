import React from 'react';

const TodoForm = props =>{
  return (

    <div>
      <input type = "text" placeholder = "...todo" onChange = {props.function}/>
      <button onClick = {props.function1}>Add Todo</button><button onClick = {props.function2}>Clear Completed</button>
    </div>

  );
};


export default TodoForm;
