import React from 'react';

const TodoActions = ({ removeCompleted, removeAll }) => (
  <div className="TodoActions">
    <div className="TodoActions__desc">ACTIONS:</div>
    <button className="TodoActions__button" onClick={removeCompleted}>
      Remove completed
    </button>
    <button className="TodoActions__button" onClick={removeAll}>
      Remove all
    </button>
  </div>
);

export default TodoActions;
