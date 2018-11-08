import React from 'react';
import Todo from './Todo';

const TodoList = props =>{
    return (
        <div>
            {props.item.map(itemInMap => (
                <Todo key={itemInMap.id}
                itemInTodo={itemInMap}
                addLineThrough={props.addLineThrough}/>

            ))}
        </div>



    )
};

export default TodoList;