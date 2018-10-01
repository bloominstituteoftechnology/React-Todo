import React from 'react';

const TodoForm = (props) => {
  return(
    <form>
      <input value={props.inputText} onChange={props.setInput} />
      <button onClick={props.addTask}>Add Task</button>
      <button onClick={props.clearTasks}>Clear All</button>
    </form>
  )
}

export default TodoForm;