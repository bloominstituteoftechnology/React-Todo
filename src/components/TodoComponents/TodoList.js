import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props.tasksList);
    return (
        <div>
            {props.tasksList.map((taskFromMap) => (
                <Todo taskOnProps={taskFromMap}  />
            ))}
        </div>
    );
};

export default TodoList;