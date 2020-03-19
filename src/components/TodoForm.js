import React from 'react';

const TodoForm = (props) => {
  console.log(props);
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="What is your task?"
          value={props.input}
          onChange={e => props.handleChange(e)}
        />
        <button>Submit</button>
      </form>
      <button onClick={props.handleClear}>Clear Completed</button>
    </div>
  )
}

export default TodoForm;