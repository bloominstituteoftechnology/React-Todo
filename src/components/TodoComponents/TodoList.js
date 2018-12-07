import React from "react";
import Todo from "./Todo"

const TodoList = props => {
  
  return (
    <div className="todoList-container">
      <ul className="todoList">
      {props.items.map(task => <Todo taskId={task.id} key={task.id} completed={task.completed} taskItem={task.task} toggleTask={props.toggleTask} />)}
      </ul>
    </div>

  )
}

export default TodoList;