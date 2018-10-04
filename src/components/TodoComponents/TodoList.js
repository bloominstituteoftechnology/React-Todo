// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.todoData.map((item, index) => {
                return (
                    <Todo 
                     key={index}
                     index={index}
                     changeCompleted={props.changeCompleted}
                     completed={item.completed}
                     task={item.task}
                     />
                );
            })}
        </div>
    );
}

export default TodoList;