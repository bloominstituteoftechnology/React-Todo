// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo.js"
import Styled from "styled-components"

const TodoListStyle =Styled.div`
text-align: center;
.todo-list{
  display: flex;
  justify-content: center;
}
`
const TodoList = props => {

  return (  
    
  <div className="todo-list">
    <TodoListStyle>
  {props.todo.map(task => (
    <Todo
      key={task.id}
      task={task}
      toggleDone={props.toggleDone}
    />
  ))}
  
  <button className="clear-btn" onClick={props.clearTask}>
    Clear Task
  </button>
  </TodoListStyle>
</div>
);
};


export default TodoList;