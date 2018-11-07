import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.tasksList.map((taskFromMap) => (
                <Todo key={taskFromMap.id} taskOnProps={taskFromMap}  />
            ))}
        </div>
    );
};

export default TodoList;