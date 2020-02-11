// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.todoList.map(task => (
                <Todo key={task.id} task={task} toggleItem={props.toggleItem} />

            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Your To Do Items
            </button>
        </div>
    );
};

export default TodoList;
