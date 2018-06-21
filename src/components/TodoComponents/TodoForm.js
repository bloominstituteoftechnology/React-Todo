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
        <button onClick={props.addTodo}>Add Todo</button>
        <button onClick={props.completedTodos}>Delete Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
