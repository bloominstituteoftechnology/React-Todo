import React from 'react';

import Todo from './Todo';

const TodoList = props => {

    return(
        <div className="toDo-list">
            <ul>
                {props.displayList.map(task => (
                    <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
                ))}
            </ul>
        </div>
    )
};


export default TodoList;