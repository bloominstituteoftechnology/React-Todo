import React from "react";
import Todo from "./Todo";


const TodoList = props => {
    return (
        <div>
            <div className="todo-list">
                {props.item.map(item => {
                    return <Todo
                     key={item.id} 
                     id={item.id} 
                     task={item.task} 
                     onClick={props.complete}/>
                })}
            </div>
        </div>
    )
}

export default TodoList;