import React from 'react';

const TodoForm = TodoFormProps => {
  return (
    <form onSubmit={TodoFormProps.reset} className="form">
      <input placeholder="Type new tasks" value={TodoFormProps.inputValue} onChange={TodoFormProps.handleInput}></input>
      <br />
      <div className="form-buttons">
        <button onClick={TodoFormProps.handleAddButton}>Add Todo</button>
        <button onClick={TodoFormProps.handleDeleteButton}>Delete Last Task</button>
        <button onClick={TodoFormProps.handleDestroyButton}>DESTROY ALL TASKS</button>
        <button onClick={TodoFormProps.handleDeleteCompletedButton}>Delete Tasks marked complete</button>
      </div>
    </form>
  )
}

export default TodoForm;
