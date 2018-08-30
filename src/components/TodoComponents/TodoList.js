import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import uuidv4 from 'uuid/v4';

import './TodoList.css';

export default function TodoList(props) {

    // make fnc that loops over todos and then delets them if completed is true...

    return (
        <div className="todo-list">
            <h2>Todos & Form</h2>
            <TodoForm addTodo={props.addTodo} />
            {/* title, body, time, complete */}
            {props.todoList.map(todo => {
                return <Todo toggleCompleteBoolean={props.toggleCompleteBoolean} key={uuidv4()} title={todo.title} body={todo.body} time={todo.time} complete={todo.complete} self={todo}
            />
            })}
            {
                props.todoList.length > 0
                ?  <button 
                        className="remove-completed-todos btn color-white"
                        type="reset"
                    >
                        Clear Completed
                    </button>
                : ''
            }
        </div>
    )
}