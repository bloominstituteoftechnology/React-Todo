import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.itemData.map(item => {
                return <Todo 
                            item={item}
                            key={item.id}
                            toggleItem={props.toggleItem}
                        />;
            })}            
        </div>
    );
};

export default TodoList
