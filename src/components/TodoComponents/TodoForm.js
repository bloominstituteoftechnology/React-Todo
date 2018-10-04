import React from 'react';

const TodoForm = props => {
  return (
    <div className="TodoForm">
      <input
        type="text"
        name="newTask"
        placeholder="add it"
        onChange={props.changeHandler}
        value={props.newTask}
      />
        <button className="adderBtn" onClick={props.addNewTask}>pin it</button>
        <button className="clearBtn">clear it</button>
    </div>
  );
};

export default TodoForm;