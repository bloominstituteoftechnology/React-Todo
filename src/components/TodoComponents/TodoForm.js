import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="todo"
          placeholder="....todo"
          value={props.todo}
          onChange={props.onChange} />
        <button onClick={props.onSubmitTodo}>Add Todo</button>
        <button onClick={props.onClearCompleted}>Clear Completed</button>
      </form>
    </div>
  );
}

export default TodoForm;
