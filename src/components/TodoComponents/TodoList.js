import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log('TodoList: ', props);
    return(
        <div className='todo-list'>
            {props.todo.map(task => (
                <Todo
                key={task.id}
                task={task.task}
                completed={task.completed}
                />
            ))}
            <button> Test Button</button>
        </div>
    )
}
export default TodoList;