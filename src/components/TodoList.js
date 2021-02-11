import React from 'react';
import Todo from './Todo';

const TodoList = ({ taskList, handleCompletion }) => {
    return (
        <div>
            {taskList.map(task => (
                <Todo
                    key={task.id}
                    task={task}
                    handleCompletion={handleCompletion}
                />
            ))}
        </div>
    );
};

export default TodoList; 