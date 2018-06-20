import React from 'react';

const TodoForm = (props) => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Add Todo" />
      </form>
      <button>Add Todo </button>
      <button>Clear Todo</button>
    </div>
  );
};

export default TodoForm;
