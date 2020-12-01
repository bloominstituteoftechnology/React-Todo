// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.toDos.map(todo => (
                <Todo key={todo.id} item={todo} />
            ))}
            <button onClick={props.handleCompleted} className='clear-btn'>
                Clear To Dos
            </button>
        </div>
    )
}

export default TodoList;