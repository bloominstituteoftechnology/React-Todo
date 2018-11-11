import React from 'react';

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={(e) => props.addTodo(e, props.category)}>
        <div className="add--todo">
          <input
            type="text"
            name={props.category + 'InputText'}
            onChange={ (e) => props.handleChange(e) }
            value={props.inputText}
            placeholder="Add todo"/>
          <button type="submit">Add Todo</button>
        </div>
        <button onClick={ (e) => props.removeCompleted(e, props.category) } >Clear Completed</button>
      </form>
    </div>
  );
}

export default TodoForm;