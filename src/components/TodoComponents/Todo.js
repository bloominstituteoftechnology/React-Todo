import React from 'react';

const Todo = props => {
    return <div className={props.item.completed ? "completed" : "item"} onClick={()=> props.toggleItem(props.item.id)}>
            {props.item.task}
         </div>;
};


export default Todo;