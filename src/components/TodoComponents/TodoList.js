import React from "react";
import Todo1 from "./Todo";


const TodoList(props) {
    return <ul>{props.todo4.map(todo2 => 
        <Todo1 
            todo3={todo2}
            key= {todo2.id}
            handleComplete={props.handleComplete}
            />
        )}
        </ul>;
}

export default TodoList;
