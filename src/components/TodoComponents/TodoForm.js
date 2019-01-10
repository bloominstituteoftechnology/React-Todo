import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
      <div>
          <form>
            <input placeholder="...todo" />
            <button onClick={props.submit}>🖊️ Add Todo</button>
            <button className="clear" onClick={props.removeComplete}>🗑️ Clear Completed</button>
          </form>
      </div>
    )
  }

  export default TodoForm;