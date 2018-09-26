import React from 'react';

const TodoForm = ({ value, handleChange, submitTodo }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="todo"
          placeholder="....todo"
          value={value}
          onChange={handleChange} />
        <button onClick={submitTodo}>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
}

export default TodoForm;
