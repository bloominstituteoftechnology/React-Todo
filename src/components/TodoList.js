// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            <h2>Things To dO</h2>
            <TodoForm addItem={props.addItem}/>
        <div className='Items'>
            {props.TodoArray.map(item=>(
                <Todo key={item.id} toggleItem={props.toggleItem} item={item}/>
            ))}

        </div>
        <button onClick={props.clearCompleted}>
                Clear Todo
    </button>
        </div>
    )
}

export default TodoList;