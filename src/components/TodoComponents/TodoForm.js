import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
    return (
      <div>
          <form>
            <input placeholder="...todo" />
            <button onClick={props.submit}>Add Todo</button>
            <button onClick={props.clear}>Clear Completed</button>
          </form>
      </div>
    )
  }

  export default TodoForm;