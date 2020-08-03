import React from 'react'; 
import Todo from './Todo'; 

const TodoList = (props) => {
    return(
        <div className='todoList'>
            {props.todos.map(todo => (
                <Todo 
                key={todo.id} 
                item={todo}
                toggleTask={props.toggleTask}
                />
            ))}
            <button onClick={props.handleRemove}>Clear Completed</button>
        </div>
    );
};

export default TodoList; 