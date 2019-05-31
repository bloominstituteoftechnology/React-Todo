import React from 'react';

const Todo = props => {
    return <div className={props.item.completed ? 'completed' : 'item'} onClick={()=> props.toggleItem(props.todo.id)}>
            {props.item.name}
         </div>;
};


export default Todo;