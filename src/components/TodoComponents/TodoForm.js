import React from 'react';

const TodoForm = props => {
  console.log(props);
  return (
    <form>
      <input type="text" placeholder="add todo" onChange={props.onChange}/>
      <button onClick={props.onClick}>Add Todo</button><button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;