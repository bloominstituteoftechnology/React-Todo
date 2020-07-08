import React from 'react';
import Todo from './Todo';

const tasks = [
    {
        task: 'Review Lesson of the Day',
        id: 123,
        completed: false
    },
    {
        task: 'Complete the Follow Along(s)',
        id: 1234,
        completed: false
    },
    {
        task: 'Attend Class Lecture',
        id: 12345,
        completed: false
    },
    {
        task: 'Begin Lesson Project',
        id: 123456,
        completed: false
    }
];

const TodoList = props => {
    return (
        <div>
            {tasks.map(task => {
                return (
                    <Todo
                        key={props.id}
                        task={props.task}
                    />)
            })}
        </div>
    )
};

export default TodoList;
