
import React from 'react';


 const TodoList = (props) => {
    return (
        <ul>
            {props.todoList.map(x => {
                return (
                    <div key={x.id}>
                        {x.task}
                    </div>
                    
                )
            })}
        </ul>
    )
}
 export default TodoList;