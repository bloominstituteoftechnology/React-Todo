import React from 'react';

const TodoForm = ({ onSumbit, onChange, value }) => (
  <form action="#" className="Todo__form" onSubmit={onSumbit}>
    <input
      onChange={onChange}
      value={value}
      type="text"
      className="Todo__input"
      placeholder="New task"
    />
  </form>
);

export default TodoForm;
