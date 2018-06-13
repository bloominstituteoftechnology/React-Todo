import React from 'react';


const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        // this needs to be different than the function on app.js (clickAddToDo does as well)
        onChange={props.typeInputNewTodo} 
        placeholder="Add todo"
        name="todo"
        value={props.value}
      /> 
      <button onClick={props.clickAddTodo}>Add Todo</button>
    </form>
  );
};

export default TodoForm;