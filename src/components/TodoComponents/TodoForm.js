import React from 'react';

const TodoForm = (props) => {
  console.log(props);
  return (
    <div>
      <form>
        <input
          type="text"
          name="todo"
          placeholder="Add Todo"
          value={props.value}
          onChange={props.submitHandler}
        />
      </form>
      <button onClick={props.addTodo}>Add Todo</button>
      <button>Clear Todo</button>
    </div>
  );
};

export default TodoForm;
//
