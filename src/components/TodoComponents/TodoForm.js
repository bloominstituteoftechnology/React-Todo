import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.addTodo}>
        <div className="add--todo">
          <input
            type="text"
            name="inputText"
            onChange={ (e) => props.handleChange(e) }
            value={props.inputText}
            placeholder="Add todo"/>
          <button type="submit">Add Todo</button>
        </div>
        <button onClick={ (e) => props.removeCompleted(e) } >Clear Completed</button>
      </form>
    </div>
  );
}

export default TodoForm;