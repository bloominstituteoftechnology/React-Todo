// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './todoList.css';

const TodoList = props => {
    return(
        <div className= 'todo-list'>
            {props.todos.filter(todo => 
            (todo.task.toLowerCase().includes(props.searchText.toLowerCase()
            ))).map(currentTodo => (
                <Todo 
                    key={currentTodo.id} 
                    singleTodo={currentTodo} 
                    isComplete={props.isComplete}
                    matchesSearch={props.matchesSearch}
                />
            ))}
        </div>
    );
}

//filtering was hard :c

export default TodoList;