import React from "react";


const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handlerTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="What do you need to do?"
      />
      <br/> <br/>
      <button onClick={props.handlerAddTodo} style= {{marginRight: "10px"}}>Add</button>
      
      <button onClick={props.handlerClearTodos}>Clear Complete</button>
    </form>
  );
};

export default TodoForm;
