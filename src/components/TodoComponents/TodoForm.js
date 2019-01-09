import React from 'react';


function TodoForm (props) {
    console.log(props);
    return (
      <form onSubmit={props.handleAdd}>
        {/* this input "controlled" input */}
        <input
          value={props.textInput}
          type="text"
          name="name"
          onChange={props.handleInput}
        />
        <button type="submit" onClick={props.handleAdd}>Add ToDo</button>
        <button>Clear Completed</button>
      </form>
    );
  }

export default TodoForm;