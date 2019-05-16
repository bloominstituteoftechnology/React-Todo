import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js?

const TodoList = props => {
    return (
        <div className='task-list'>
            {props.todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    toggleTodo={props.toggleTodo} 
                />
            ))}
            <button className='clear-btn' onClick={e => props.clearCompleted(e)}>Clear Completed</button>
        </div>
    );
};

export default TodoList;