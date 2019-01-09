import React from "react";

function TodoForm(props) {
  return (
    <form>
      {/* this input "controlled" input */}
      <input
        value={props.task}
        type="text"
        name="characterName"
        placeholder="Task"
        onChange={props.handleChanges}
      />
      {/* <input
        value={props.characterMovie}
        type="text"
        name="characterMovie"
        placeholder="Movie"
        onChange={props.handleChanges}
      /> */}
      <button type="submit" onClick={props.addNewTodo}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
