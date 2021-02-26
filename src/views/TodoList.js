import React from 'react';
import TodoItem from './TodoItem.js';



const TodoList = (props) => {
    return(
        <div>
            {props.data.map((item) => (
                <TodoItem 
                    key={item.id} 
                    data={item} 
                    checkOff={props.checkOff}
                    />
            ))}
        </div>
    )
}



export default TodoList; 