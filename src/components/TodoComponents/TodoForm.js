import React from 'react';

const TodoForm = ({ onSubmit, onChange, value }) => {
  return (
    <form action="#" className="Todo__form" onSubmit={onSubmit}>
      <input
        onChange={e =>
          // console.log(e.target);
          onChange(e.target.value)
        }
        value={value}
        type="text"
        className="Todo__input"
        placeholder="New task"
      />
    </form>
  );
};

export default TodoForm;
