import React from "react";
import Todo from "./Todo";

function TodoList(props){
    return (
        <div className="todo-list">
            {props.todoAll.map(task => {
                return (
                    <Todo
                        todoTask={task}
                        toggleTaskComplete={props.toggleTaskComplete}
                        key={task.id}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;