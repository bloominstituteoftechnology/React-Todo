import React from "react";

const TodoList = props => {
  return(
    <div>
      
    
    {props.todos.map((todo, index) => <div onClick={props.toggleClick} key ={todo + index}>{todo}</div>)}
</div>
  )
};

export default TodoList;
