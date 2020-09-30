import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {

    return (
        <div className="todo-list">
            {props.tasks.map((todo) => (
                <Todo key={todo.id} todo={todo} toggleItem={props.toggleItem} />
            ))}
         <button className="clear-btn" onClick={props.clearTodo}>Clear Task</button>
        </div>
    )

}
export default TodoList;