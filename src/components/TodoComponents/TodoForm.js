import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.addNewTodo}>
        <input
          name="newTodo"
          placeholder="...todo"
          type="text"
          value={props.newTodo}
          onChange={props.textInputHandler}
        />
        <button className="fa fa-pencil">Add Todo</button>
        <button onClick={props.filterCompleted} className="fa fa-eraser">Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;
