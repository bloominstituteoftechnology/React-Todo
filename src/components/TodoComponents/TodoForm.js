import React from 'react';

const TodoForm = props => {
  return(
    <form className="form-group">
      <input
        type="text"
        placeholder="Enter New Task"
        name="newTodo"
        value={props.newTodo}
        onChange={props.changeInput}
      />
      <button type="submit" onClick={props.addNewTodo}>Add New Task</button>
      <button type="submit" onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
