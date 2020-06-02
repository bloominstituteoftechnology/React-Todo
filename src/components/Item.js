import React from "react";

const Item = props => {
    console.log(props)
    

  


    return (
        <div
            onClick={() => props.toggleItem(props.todoList.id)}
            className={`item${props.todoList.purchased ? " purchased" : ""}`}
        >
            <p>{props.todoList.task}</p>
        </div>
    );
};


export default Item;
