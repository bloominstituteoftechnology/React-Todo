import React from 'react';
import './Todo.css';

import Todo from './Todo';

function TodoList(props) {
    return (
        <div className='todo-container'>
            <h1>My Todo List:</h1>
            {props.todoDataList.map((todo, id) => {
                return (
                    <Todo 
                        todo={todo} 
                        key={todo.id}
                        toggleCompleted={props.toggleCompleted}
                    />
                );
            })}
        </div>   
    );
}

export default TodoList;
































//Receives Todo's array and iterates over the list generating a new <Todo />
