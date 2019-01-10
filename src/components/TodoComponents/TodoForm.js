import React from 'react';

function TodoForm(props) {
  return (
    <form>
      <input
      type="text"
      name="inputText"
      placeholder="Add New ToDo..."
      className="add-box"
      value={props.inputText}
      
      onChange={props.changes} />
    </form>
  )
}

export default TodoForm;