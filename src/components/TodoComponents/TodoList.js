// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {

    return(
        <div>
            {props.todo.map(List => (
                <list key = {list.id} list = {list} />
            ))}

            <button onClick ={props.clearTasks}> Clear Tasks</button>
        </div>
    );
};

export default TodoList;