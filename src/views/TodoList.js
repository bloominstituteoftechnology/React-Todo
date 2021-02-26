import React from 'react';
import TodoItem from './TodoItem.js';

import TodoForm from './TodoForm.js';



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

            <TodoForm addTask={props.addTask}/>
        </div>
    )
}



export default TodoList; 