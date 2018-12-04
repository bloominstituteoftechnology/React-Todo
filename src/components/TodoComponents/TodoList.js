import React from "react";
import ListItemRenderer from "./Todo"

const TodoList = props => {
    return (
      <div className="todoList">
        {props.items.map(task => <ListItemRenderer key={task.id} taskItems={task}/>)}
      </div>
    )
}

export default TodoList;