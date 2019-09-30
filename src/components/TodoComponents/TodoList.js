import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.tasks.map(item=>(
                <Todo key={item.id} item={item} toggleTask={props.toggleTask}/>
            ))}
            {/* <button className='clear-button' onClick={props.clearCompleted}>Start Over</button> */}
        </div>
    )
};

export default TodoList;