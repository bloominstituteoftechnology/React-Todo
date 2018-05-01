import React from "react";
// import TodoList from "./components/TodoList";

const Todo = props => {
    console.log(props)
    return (
        <x>{props.items.map(item => {
            console.log(item.name)
            return <div className="rounded listElement" key={item.id}>{item.item}</div>;
        })}
        </x>
    )
}

export default Todo;