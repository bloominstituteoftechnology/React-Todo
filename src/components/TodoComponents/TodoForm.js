import React from 'react';

function TodoForm(props) {
  return (
    <form>
      <input
        value={props.newTodoText}
        type="text"
        onChange={props.handleChanges}
        name="newTodoText"
        required
      />
      <div className="buttons">
        <button className="button1" onClick={props.addTodo}>Add To-Do</button>
        <button onClick={props.clearComplete}>Clear Complete</button>
      </div>
      
    </form>
  );
}

export default TodoForm;