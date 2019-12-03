// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todos from './Todo';

const TodoList = props => {

    return(
        <div>
            {props.todo.map(task => (
                <Todos key = {task.id} Todos = {task} />
            ))}

            <button onClick ={props.clearTasks}> Clear Tasks</button>
        </div>
    );
};

export default TodoList;