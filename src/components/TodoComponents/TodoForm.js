import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        onChange={props.changeTodoInput}
        placeholder="what do you need to do?"
        value={props.todoInput}
      />
      <div className="buttons-container">
        <button className="add-button" onClick={props.addTodo}>add todo</button>
        <button className="completed-button" onClick={props.clearCompleted}>clear completed</button>
      </div>
    </form>
  );
};

export default TodoForm;
